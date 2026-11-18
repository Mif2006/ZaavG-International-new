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
      const updated = [...cart];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + item.quantity,
      };
      cart = updated;
    } else {
      cart = [...cart, { ...item, id }];
    }

    isOpen = true;
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

// Stable server snapshots (must be constant references, not fresh arrays)
const EMPTY_CART: CartItem[] = [];
const getServerCartSnapshot = () => EMPTY_CART;
const getServerIsOpenSnapshot = () => false;

// Custom hook to use anywhere in your app
export function useCart() {
  const items = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getSnapshot,
    getServerCartSnapshot,
  );
  const isCartOpen = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getIsOpenSnapshot,
    getServerIsOpenSnapshot,
  );

  return {
    items,
    isCartOpen,
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    ...cartStore,
  };
}