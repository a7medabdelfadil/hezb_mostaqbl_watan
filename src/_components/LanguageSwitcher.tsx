/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  type Language,
  useLanguageStore,
  useInitializeLanguage,
} from "~/APIs/store";

const LanguageSwitcher = () => {
  useInitializeLanguage();

  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const isLoading = useLanguageStore((state) => state.isLoading);

  const options = {
    en: "/images/en.png",
    ar: "/images/ar.png",
  };

  const toggleLanguage = () => {
    const newLang: Language = language === "ar" ? "en" : "ar";
    setLanguage(newLang);
  };

  if (isLoading) return null;

  const ringColor =
    language === "ar" ? "md:ring-blue-400 md:shadow-blue-500/50" : "md:ring-yellow-300 md:shadow-yellow-400/60";

  return (
    <button
      onClick={toggleLanguage}
      className={`relative w-6 h-6 md:h-8 md:w-8 rounded-full ring-2 ${ringColor} shadow-lg transition-all duration-300 ease-in-out hover:scale-110`}
      aria-label="Toggle Language"
    >
      <img
        src={options[language]}
        alt="language"
        className="h-full w-full rounded-full object-cover"
      />
    </button>
  );
};

export default LanguageSwitcher;
