import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/payment-error")({
  component: PaymentErrorPage,
});

function PaymentErrorPage() {
  // Replace these with your actual phone number and WhatsApp link when ready
  const waNumber = "79050441111"; // Numbers only format for URL (e.g. 79050441111)
  const whatsappUrl = `https://wa.me/${waNumber}`;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-4 overflow-hidden bg-black">
      
      {/* Background Image with Dark Overlay (Matches the Yosemite/Nature theme from your screenshot) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0"
        style={{ 
          backgroundImage: `url('/ThankYouMountain.webp')` 
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
        
        {/* Error Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Что-то пошло не так :(
        </h1>

        {/* Description Text with Phone Number Link */}
        <p className="text-base md:text-lg font-light text-gray-200 leading-relaxed max-w-xl">
          При оплате произошла ошибка. Проверьте введенные вами данные и повторите попытку.
          <br />
          Если ошибка повторяется, вы можете связаться с нами по номеру{" "}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium underline underline-offset-4 hover:text-[#45cbad] transition-colors"
          >
            8 (905) 044-11-11
          </a>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
          {/* Main Green Action Button */}
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-black text-sm tracking-wide transition-all shadow-lg hover:opacity-95"
            style={{ backgroundColor: "#45cbad" }}
          >
            На главную
          </Link>

          {/* Secondary White Action Button (e.g. Catalog / Cart) */}
          <Link
            to="/" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-black text-sm tracking-wide bg-white transition-all shadow-lg hover:bg-gray-100"
          >
            В каталог
          </Link>
        </div>

      </div>
    </div>
  );
}