import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/payment-error")({
  component: PaymentErrorPage,
});

function PaymentErrorPage() {
  // TODO: Replace these with your actual phone number when you have it.
  // The waNumber should be numbers only (e.g., "79991234567") for the URL to work correctly.
  const waNumber = "1234567890"; 
  const displayNumber = "+1 234 567 890"; // How it looks on the screen

  const whatsappLink = `https://wa.me/${waNumber}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center px-4">
      
      {/* Red Error/Warning Icon */}
      <svg 
        className="w-16 h-16 text-red-500 mb-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Что-то пошло не так.
      </h1>
      
      <div className="max-w-lg space-y-4 text-gray-600 text-lg">
        <p>
          При оплате произошла ошибка. Проверьте введенные вами данные и повторите попытку.
        </p>
        <p>
          Если ошибка повторяется, вы можете связаться с нами по номеру{" "}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            {displayNumber}
          </a>
          {" "} (WhatsApp).
        </p>
      </div>

      <div className="mt-10">
        {/* Button to go back to the home page or cart */}
        <Link 
          to="/" 
          className="px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
      
    </div>
  );
}