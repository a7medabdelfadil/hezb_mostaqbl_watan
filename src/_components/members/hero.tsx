"use client";

import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    titleLine1: "نواب حزب مستقبل وطن",
    titleLine2: "في البرلمان المصري",
    description:
      "تعرّف على ممثلي الحزب في مجلسي النواب والشيوخ، الذين يساهمون في صياغة السياسات والتشريعات من أجل بناء مستقبل أفضل للوطن والمواطن.",
  },
  en: {
    titleLine1: "Mostaqbal Watan Party MPs",
    titleLine2: "in the Egyptian Parliament",
    description:
      "Meet the party’s representatives in the House and Senate, contributing to policy and legislation for a better future.",
  },
};

export default function MembersHero() {
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[.5]"
        style={{ backgroundImage: "url('/images/membershero.png')" }}
      />
      <div className="relative z-10 flex h-full flex-col bg-gradient-to-t from-black/50 to-transparent  items-center justify-center px-4 text-center text-white">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {t.titleLine1}
          <br />
          {t.titleLine2}
        </h1>
        <p className="mt-4 max-w-2xl bg-[#207CEB33] px-4 py-2 text-2xl text-white/90">
          {t.description}
        </p>
      </div>
    </section>
  );
}
