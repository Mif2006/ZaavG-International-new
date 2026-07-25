import { useSyncExternalStore } from "react";

export interface CartItem {
  id: string; // Unique ID (productId + size)
  productId: string;
  title: string;
  price: number;
  image: string | null;
  size: string | null;
  quantity: number;
}

// Initialize from localStorage if available
let cart: CartItem[] = [];
if (typeof window !== "undefined") {
  try {
    const stored = localStorage.getItem("zaav-cart");
    if (stored) cart = JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse cart from local storage");
  }
}

let isOpen = false;
const listeners = new Set<() => void>();

function emit() {
  if (typeof window !== "undefined") {
    localStorage.setItem("zaav-cart", JSON.stringify(cart));
  }
  listeners.forEach((l) => l());
}

export const cartStore = {
  addItem: (item: Omit<CartItem, "id">) => {
    const id = `${item.productId}-${item.size || "none"}`;
    const existingIndex = cart.findIndex((i) => i.id === id);
    
    if (existingIndex >= 0) {
      // Update quantity if item + size already exists
      const updated = [...cart];
      updated[existingIndex] = { 
        ...updated[existingIndex], 
        quantity: updated[existingIndex].quantity + item.quantity 
      };
      cart = updated;
    } else {
      // Add new item
      cart = [...cart, { ...item, id }];
    }
    
    isOpen = true; // Auto-open cart when adding items
    emit();
  },
  removeItem: (id: string) => {
    cart = cart.filter((i) => i.id !== id);
    emit();
  },
  updateQuantity: (id: string, quantity: number) => {
    cart = cart.map((i) => (i.id === id ? { ...i, quantity } : i));
    emit();
  },
  clearCart: () => {
    cart = [];
    emit();
  },
  setIsOpen: (open: boolean) => {
    isOpen = open;
    emit();
  },
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot: () => cart,
  getIsOpenSnapshot: () => isOpen,
};

// Custom hook to use anywhere in your app
export function useCart() {
  const items = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot);
  const isCartOpen = useSyncExternalStore(cartStore.subscribe, cartStore.getIsOpenSnapshot);
  
  return { 
    items, 
    isCartOpen, 
    total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    ...cartStore 
  };
}