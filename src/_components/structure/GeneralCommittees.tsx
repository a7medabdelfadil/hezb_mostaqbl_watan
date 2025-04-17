"use client";

import Image from "next/image";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    title: "اللجان المركزية",
    items: [
      {
        heading: "لجنة الثقافة والإعلام",
        text: "تعنى بالشؤون الثقافية والإعلامية وتطوير الخطاب الإعلامي.",
        icon: "🎙️",
      },
      {
        heading: "لجنة الشباب والرياضة",
        text: "تهتم بقضايا الشباب وتطوير الأنشطة الرياضية.",
        icon: "🏅",
      },
      {
        heading: "اللجنة الاقتصادية",
        text: "تختص بوضع السياسات الاقتصادية وتقديم الرؤى والمقترحات.",
        icon: "💼",
      },
      {
        heading: "لجنة التعليم والبحث العلمي",
        text: "تهتم بتطوير السياسات التعليمية ودعم البحث العلمي.",
        icon: "🎓",
      },
      {
        heading: "لجنة الصحة",
        text: "تهتم بتطوير المنظومة الصحية وتقديم الحلول للتحديات الصحية.",
        icon: "🩺",
      },
      {
        heading: "لجنة الإسكان والمرافق",
        text: "تختص بقضايا الإسكان والبنية التحتية والخدمات العامة.",
        icon: "🏘️",
      },
    ],
  },
  en: {
    title: "Central Committees",
    items: [
      {
        heading: "Culture and Media Committee",
        text: "Responsible for cultural and media affairs and developing public discourse.",
        icon: "🎙️",
      },
      {
        heading: "Youth and Sports Committee",
        text: "Focuses on youth issues and enhancing sports activities.",
        icon: "🏅",
      },
      {
        heading: "Economic Committee",
        text: "Develops economic policies and recommendations.",
        icon: "💼",
      },
      {
        heading: "Education and Research Committee",
        text: "Supports educational policies and scientific research.",
        icon: "🎓",
      },
      {
        heading: "Health Committee",
        text: "Improves the healthcare system and offers solutions.",
        icon: "🩺",
      },
      {
        heading: "Housing and Infrastructure Committee",
        text: "Handles housing and infrastructure issues and public services.",
        icon: "🏘️",
      },
    ],
  },
};

export default function CentralCommittees() {
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="w-full bg-white px-4 py-12 md:px-24"
    >
      <div className="mx-auto w-[90%]">
        {/* Title */}
        <div
          className="relative mx-auto mb-12 h-[200px] w-[400px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/structureborder2.png')" }}
        >
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary3">
            {t.title}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Image */}
          <Image
            src="/images/generalcommities.png"
            alt="structure"
            width={800}
            height={600}
            className="md:max-x-md mx-auto w-full rounded-xl lg:max-w-xl"
          />

          {/* List */}
          <div className="space-y-4">
            {t.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-b border-gray-100 pb-4"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-black">
                    {item.heading}
                  </h3>
                  <p className="text-xs text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
