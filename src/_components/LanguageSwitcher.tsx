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
    language === "ar" ? "ring-blue-400 shadow-blue-500/50" : "ring-yellow-300 shadow-yellow-400/60";

  return (
    <button
      onClick={toggleLanguage}
      className={`relative h-8 w-8 rounded-full ring-2 ${ringColor} shadow-lg transition-all duration-300 ease-in-out hover:scale-110`}
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
