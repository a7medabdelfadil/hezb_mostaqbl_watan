"use client";

import Image from "next/image";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    title: "الهيئات الرئيسية",
    items: [
      {
        heading: "المؤتمر العام",
        text: "الهيئة العليا للحزب، تتجمع مرة كل عام، وتضم ممثلين عن كافة المحافظات.",
      },
      {
        heading: "المكتب السياسي",
        text: "يضم 15 عضوًا ويجتمع دوريًا لمتابعة القضايا السياسية واتخاذ القرارات.",
      },
      {
        heading: "الهيئة العليا",
        text: "تضم 50 عضوًا وتجتمع كل 3 أشهر لمتابعة تنفيذ قرارات المؤتمر العام.",
      },
      {
        heading: "لجنة التقييم والتقارير",
        text: "تختص بالنظر في المحافظات وتطبيق آليات التقييم.",
      },
    ],
  },
  en: {
    title: "Main Committees",
    items: [
      {
        heading: "General Conference",
        text: "The party’s highest body, held annually, with representatives from all governorates.",
      },
      {
        heading: "Political Bureau",
        text: "Consists of 15 members, meets regularly to review political issues.",
      },
      {
        heading: "Supreme Council",
        text: "Includes 50 members and meets every 3 months to follow up decisions.",
      },
      {
        heading: "Evaluation Committee",
        text: "Responsible for evaluations and report handling.",
      },
    ],
  },
};

export default function MainCommittees() {
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"} className="w-full bg-white px-4 py-12 md:px-24">
     <div className="w-[90%] mx-auto">
      {/* Title with background image */}
      <div
        className="relative mx-auto mb-12 h-[200px] w-[300px] md:w-[400px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/structureborder2.png')" }}
      >
        <p className="absolute inset-0 flex items-center justify-center  text-xl md:text-2xl font-bold text-primary3">
          {t.title}
        </p>
      </div>

      {/* Content */}
      <div
        className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2`}
      >
        
        {/* List */}
        <div className="space-y-4">
          {t.items.map((item, i) => (
            <div key={i} className="flex gap-4 items-center w-fit border-b border-gray-100 p-4">
              <h3 className="text-sm font-bold text-black">{item.heading}</h3>
              <p className="text-xs text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
        {/* Image */}
        <Image
          src="/images/maincommites.png"
          alt="structure"
          width={800}
          height={600}
          className="mx-auto w-full md:max-x-md lg:max-w-xl rounded-xl"
        />

      </div>
     </div>
    </section>
  );
}
