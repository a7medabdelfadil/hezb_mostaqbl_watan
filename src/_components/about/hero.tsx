"use client";

import Image from "next/image";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    title: "عن حزب مستقبل وطن",
    desc: "تعرّف علينا و عن نشأة الحزب، رؤيته الوطنية، هيكله التنظيمي، والأسس التي يقوم عليها عمله السياسي والتنظيمي."
  },
  en: {
    title: "About Mostaqbal Watan Party",
    desc: "Get to know us, the founding of the party, our national vision, organizational structure, and the foundations of our political and organizational work."
  },
};

export default function AboutHero() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language || "ar"];

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className="relative h-[90vh] w-full overflow-hidden"
    >
      <Image
        src="/images/abouthero.png"
        alt="about background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 z-10 flex flex-col bg-gradient-to-t from-black/50 to-transparent  items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">{t.title}</h1>
        <p className="mt-4 max-w-2xl bg-[#207CEB33] px-4 py-2 text-2xl text-white/90">
          {t.desc}
        </p>
      </div>
    </section>
  );
}
