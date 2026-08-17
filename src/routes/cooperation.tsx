import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useId, FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/cooperation")({
  head: () => ({
    meta: [
      { title: "Partnerships & Cooperation — ZAAV G" },
      {
        name: "description",
        content: "Join our global network of representatives, boutiques, stylists, and creators with ZAAV G.",
      },
      { property: "og:title", content: "Partnerships & Cooperation — ZAAV G" },
      { property: "og:description", content: "Join our global network of representatives, boutiques, stylists, and creators with ZAAV G." },
    ],
  }),
  component: CooperationPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    cooperationTitle: string;
    cooperationIntro: string;
    formTitle: string;
    formSubtitle: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formSocial: string;
    formSocialPlaceholder: string;
    formCountry: string;
    formCountryPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    cooperationBtnCatalog: string;
    cooperationBtnHome: string;
    sending: string;
    success: string;
    error: string;
    fieldRequired: string;
    invalidEmail: string;
    validationSummary: string;
  }
> = {
  en: {
    cooperationTitle: "PARTNERSHIPS",
    cooperationIntro: "We are always open to meaningful collaborations, creative projects, boutiques, stylists, photographers, content creators, and beautiful ideas from around the world.",
    formTitle: "If you feel connected to the world of ZAAV G, we would love to hear from you.",
    formSubtitle: "Fill out the form below and let us create something meaningful together.",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formSocial: "Instagram / Website",
    formSocialPlaceholder: "@username or website",
    formCountry: "Country",
    formCountryPlaceholder: "Your country",
    formMessage: "Message",
    formMessagePlaceholder: "Tell us about your project or question...",
    formSubmit: "Send Message",
    cooperationBtnCatalog: "View Collections",
    cooperationBtnHome: "Home",
    sending: "Sending...",
    success: "Message sent successfully! We'll contact you soon.",
    error: "Failed to send. Please try again.",
    fieldRequired: "This field is required",
    invalidEmail: "Please enter a valid email address",
    validationSummary: "Please fill in all mandatory fields highlighted above.",
  },
  ru: {
    cooperationTitle: "СОТРУДНИЧЕСТВО",
    cooperationIntro: "Мы всегда открыты для коллабораций, творческих проектов, бутиков, стилистов, фотографов, контент-мейкеров и прекрасных идей со всего мира.",
    formTitle: "Если вы чувствуете связь с миром ZAAV G, мы будем рады услышать вас.",
    formSubtitle: "Заполните форму ниже, и давайте создадим что-то значимое вместе.",
    formName: "Имя",
    formNamePlaceholder: "Ваше имя",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formSocial: "Instagram / Сайт",
    formSocialPlaceholder: "@username или сайт",
    formCountry: "Страна",
    formCountryPlaceholder: "Ваша страна",
    formMessage: "Сообщение",
    formMessagePlaceholder: "Расскажите о вашем проекте или вопросе...",
    formSubmit: "Отправить сообщение",
    cooperationBtnCatalog: "Смотреть коллекции",
    cooperationBtnHome: "На главную",
    sending: "Отправка...",
    success: "Сообщение успешно отправлено! Мы свяжемся с вами скоро.",
    error: "Ошибка отправки. Попробуйте ещё раз.",
    fieldRequired: "Обязательное поле",
    invalidEmail: "Укажите корректный email",
    validationSummary: "Пожалуйста, заполните все выделенные обязательные поля.",
  },
  id: {
    cooperationTitle: "KEMITRAAN",
    cooperationIntro: "Kami selalu terbuka untuk kolaborasi yang bermakna, proyek kreatif, butik, penata gaya, fotografer, pembuat konten, dan ide-ide indah dari seluruh dunia.",
    formTitle: "Jika Anda merasa terhubung dengan dunia ZAAV G, kami ingin mendengar dari Anda.",
    formSubtitle: "Isi formulir di bawah ini dan mari kita ciptakan sesuatu yang bermakna bersama.",
    formName: "Nama",
    formNamePlaceholder: "Nama Anda",
    formEmail: "Email",
    formEmailPlaceholder: "email@anda.com",
    formSocial: "Instagram / Website",
    formSocialPlaceholder: "@username atau website",
    formCountry: "Negara",
    formCountryPlaceholder: "Negara Anda",
    formMessage: "Pesan",
    formMessagePlaceholder: "Ceritakan tentang proyek atau pertanyaan Anda...",
    formSubmit: "Kirim Pesan",
    cooperationBtnCatalog: "Lihat Koleksi",
    cooperationBtnHome: "Beranda",
    sending: "Mengirim...",
    success: "Pesan berhasil dikirim! Kami akan menghubungi Anda segera.",
    error: "Gagal mengirim. Silakan coba lagi.",
    fieldRequired: "Wajib diisi",
    invalidEmail: "Masukkan alamat email yang valid",
    validationSummary: "Silakan lengkapi semua kolom wajib yang ditandai di atas.",
  },
};

function CooperationPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  const nameId = useId();
  const emailId = useId();
  const socialId = useId();
  const countryId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    country?: string;
    message?: string;
  }>({});

  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = t.fieldRequired;
    }
    if (!formData.email.trim()) {
      newErrors.email = t.fieldRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = t.invalidEmail;
    }
    if (!formData.country.trim()) {
      newErrors.country = t.fieldRequired;
    }
    if (!formData.message.trim()) {
      newErrors.message = t.fieldRequired;
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const currentLang = (lang as Lang) || "en";

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: "error", message: T[currentLang].validationSummary });

      // Auto-focus first field with error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const idMap: Record<string, string> = {
        name: nameId,
        email: emailId,
        country: countryId,
        message: messageId,
      };
      const element = document.getElementById(idMap[firstErrorKey]);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "loading", message: T[currentLang].sending });

    try {
      const res = await fetch("/api/cooperation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: T[currentLang].success });
        setFormData({ name: "", email: "", social: "", country: "", message: "" });
        setErrors({});
        setTimeout(() => {
          setStatus({ type: null, message: "" });
        }, 5000);
      } else {
        throw new Error(result.error || "Failed to send");
      }
    } catch (err) {
      console.error("Cooperation form error:", err);
      setStatus({ type: "error", message: T[currentLang].error });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContent = () => {
    const el = document.getElementById("cooperationContent");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getInputClass = (hasError?: boolean) => `
    w-full px-4 py-3.5 font-sans text-base text-neutral-900 bg-white border-2 
    rounded-lg outline-none transition-all duration-200
    ${
      hasError
        ? "border-rose-500/80 focus:border-rose-600 focus:ring-4 focus:ring-rose-500/10 bg-rose-50/20"
        : "border-neutral-200 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5"
    }
  `;

  return (
    <PublicShell>
      <div className="relative w-full min-h-screen bg-white font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
        {/* Hero Section */}
        <section className="relative z-0 flex h-[60vh] min-h-[450px] items-center justify-center overflow-hidden">
  {/* Background Layer: Parallax on PC, standard scroll on iPad/mobile */}
  <div 
    className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-scroll xl:[@media(pointer:fine)]:bg-fixed"
    style={{ backgroundImage: `url('/FaqCoop.webp')` }}
  />
          <div className="absolute inset-0 bg-[#0a140f]/75 z-10" />
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
            <h1
              className={`font-bold text-white tracking-[0.15em] uppercase leading-tight mb-10 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all ${
                lang === "ru" ? "text-2xl sm:text-3xl md:text-5xl" : "text-3xl sm:text-4xl md:text-6xl"
              }`}
            >
              {t.cooperationTitle}
            </h1>
            <div
              onClick={scrollToContent}
              className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 animate-bounce mx-auto mt-8 hover:border-white"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[2]">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-24 px-6 bg-white text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl font-normal text-neutral-600 leading-[1.9]">
              {t.cooperationIntro}
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section id="cooperationContent" className="py-20 px-6 bg-gradient-to-br from-[#f9f9f9] to-[#f5f5f5]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 text-center mb-4 tracking-tight">
              {t.formTitle}
            </h2>
            <p className="text-base text-neutral-600 text-center mb-12 leading-relaxed">
              {t.formSubtitle}
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 sm:p-12 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-neutral-200/80 space-y-7"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor={nameId} className="block text-sm font-medium text-neutral-900 after:content-['_*'] after:text-rose-500">
                    {t.formName}
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={t.formNamePlaceholder}
                    className={getInputClass(!!errors.name)}
                  />
                  {errors.name && (
                    <p className="text-xs font-medium text-rose-500 mt-1 flex items-center gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-rose-500" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor={emailId} className="block text-sm font-medium text-neutral-900 after:content-['_*'] after:text-rose-500">
                    {t.formEmail}
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={t.formEmailPlaceholder}
                    className={getInputClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p className="text-xs font-medium text-rose-500 mt-1 flex items-center gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-rose-500" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor={socialId} className="block text-sm font-medium text-neutral-900">
                    {t.formSocial}
                  </label>
                  <input
                    id={socialId}
                    type="text"
                    value={formData.social}
                    onChange={(e) => handleInputChange("social", e.target.value)}
                    placeholder={t.formSocialPlaceholder}
                    className={getInputClass()}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor={countryId} className="block text-sm font-medium text-neutral-900 after:content-['_*'] after:text-rose-500">
                    {t.formCountry}
                  </label>
                  <input
                    id={countryId}
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    placeholder={t.formCountryPlaceholder}
                    className={getInputClass(!!errors.country)}
                  />
                  {errors.country && (
                    <p className="text-xs font-medium text-rose-500 mt-1 flex items-center gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-rose-500" />
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor={messageId} className="block text-sm font-medium text-neutral-900 after:content-['_*'] after:text-rose-500">
                  {t.formMessage}
                </label>
                <textarea
                  id={messageId}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder={t.formMessagePlaceholder}
                  className={`${getInputClass(!!errors.message)} resize-y leading-relaxed`}
                />
                {errors.message && (
                  <p className="text-xs font-medium text-rose-500 mt-1 flex items-center gap-1.5">
                    <span className="inline-block w-1 h-1 rounded-full bg-rose-500" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-neutral-900 text-white font-sans text-base font-medium rounded-lg shadow-lg hover:bg-neutral-800 transition-all duration-350 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99]"
              >
                {t.formSubmit}
              </button>

              {status.type && (
                <div
                  className={`p-4 rounded-lg text-sm text-center leading-relaxed transition-all duration-300 ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : status.type === "error"
                      ? "bg-rose-50 text-rose-700 border border-rose-200/80"
                      : "bg-neutral-100 text-neutral-600 border border-neutral-300"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Action Buttons Block */}
        <section className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.cooperationBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.cooperationBtnHome}
          </Link>
        </section>
      </div>
    </PublicShell>
  );
}