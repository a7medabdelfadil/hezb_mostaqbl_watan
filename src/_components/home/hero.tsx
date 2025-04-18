/* eslint-disable @next/next/no-img-element */
"use client";

import { LucideUsers, LucideBookOpen } from "lucide-react";
import { LuPyramid } from "react-icons/lu";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    title: "معًا نصنع مستقبل وطن",
    desc: "نؤمن بأن العمل الوطني المشترك هو طريقنا نحو غدٍ أفضل لكل المصريين، من أجل تنمية مستدامة وعدالة اجتماعية.",
    features: [
      {
        icon: <LuPyramid size={24} />,
        title: "نعمل من أجل مصر",
        desc: "نروم بناء مجتمع متماسك يسوده العدل ويزدهر فيه كل مواطن على أرض الوطن.",
      },
      {
        icon: <LucideBookOpen size={24} />,
        title: "نؤمن بالتعليم",
        desc: "نشارك في مبادرات تطوير التعليم وتوفير فرص متكافئة لأبنائنا من مختلف الفئات.",
      },
      {
        icon: <LucideUsers size={24} />,
        title: "ندعم المواطن",
        desc: "نعمل على تقديم المبادرات الخدمية والدعم المباشر للمواطنين الأكثر احتياجًا.",
      },
    ],
  },
  en: {
    title: "Together we shape the Nation’s Future",
    desc: "We believe that collaborative national work is the path toward a better future for all Egyptians, aiming for sustainable development and social justice.",
    features: [
      {
        icon: <LuPyramid size={24} />,
        title: "For Egypt",
        desc: "We aim to build a cohesive society where justice prevails and every citizen thrives.",
      },
      {
        icon: <LucideBookOpen size={24} />,
        title: "We Believe in Education",
        desc: "We support educational development and equal opportunities for all students.",
      },
      {
        icon: <LucideUsers size={24} />,
        title: "We Support Citizens",
        desc: "We provide initiatives and direct support to the most in-need citizens.",
      },
    ],
  },
};

export default function Hero() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.ar;

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className="relative h-[90vh] w-full text-white"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero.png"
          alt="صورة الخلفية"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div> */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/videos/egyptanimation.mp4"
          className="h-full w-full object-cover"
          autoPlay muted loop
        />
        <div className="absolute inset-0  bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Text */}
      <div
        className={`flex h-full max-md:pt-40 flex-col md:items-center md:justify-center space-y-4 px-6 md:px-24`}
      >
        <h1 className="whitespace-pre-line text-2xl leading-tight md:text-7xl">
          {t.title}
        </h1>
        <p className="max-w-xl bg-[#207CEB22] px-4 py-2 text-sm md:text-lg">
          {t.desc}
        </p>
      </div>

      {/* Features */}
      <div className="absolute bottom-0 right-0 w-full px-4 py-8 md:px-24">
        <div className="grid grid-cols-1 gap-4 text-sm text-white md:grid-cols-3">
          {t.features.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col gap-2 pr-4 items-start `}
            >
              {/* Gradient Divider */}
              {i !== 0 && (
                <div
                  className={`absolute top-0 mx-4 ${language === "ar" ? "left-full" : "right-full"} hidden h-full w-px bg-[linear-gradient(to_top,transparent,#207CEB,transparent)] md:block`}
                />
              )}

              <div className="rounded-xl border border-secondary p-2 text-secondary">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-xs leading-relaxed text-white/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
