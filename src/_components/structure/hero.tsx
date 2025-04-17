"use client";

import Image from "next/image";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    title: "أعضاء الأمانة المركزية لحزب مستقبل وطن",
    desc: "تعرّف على قيادات الحزب الذين يقودون العمل السياسي والتنظيمي نحو المستقبل",
  },
  en: {
    title: "Central Secretariat Members of Mostaqbal Watan Party",
    desc: "Meet the party leaders driving the political and organizational mission into the future",
  },
};

export default function StructureHero() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.ar;

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/structurehero.png"
        alt="structure hero"
        fill
        className="object-cover"
      />

      {/* Text */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-gradient-to-t from-black/80 to-transparent px-6 text-center text-white">
        <h1 className="mb-4 text-2xl font-bold md:text-4xl lg:text-5xl">
          {t.title}
        </h1>
        <p className="max-w-2xl bg-[#207CEB33] px-4 py-2 text-2xl text-white/90">
          {t.desc}
        </p>
      </div>
    </section>
  );
}
