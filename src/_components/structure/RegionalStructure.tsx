"use client";

import { Building, Landmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    title: "الهيكل الإقليمي",
    items: [
      {
        heading: "أمانات المحافظات",
        text: "27 أمانة على مستوى محافظات الجمهورية",
        href: "/governorate",
        icon: <Building size={20} />,
      },
      {
        heading: "أمانات المراكز",
        text: "تغطي كافة المراكز الإدارية في المحافظات",
        href: "/district",
        icon: <Landmark size={20} />,
      },
    ],
  },
  en: {
    title: "Regional Structure",
    items: [
      {
        heading: "Governorate Secretariats",
        text: "27 secretariats across Egypt’s governorates.",
        href: "/governorate",
        icon: <Building size={20} />,
      },
      {
        heading: "District Secretariats",
        text: "Covering all administrative districts in governorates.",
        href: "/district",
        icon: <Landmark size={20} />,
      },
    ],
  },
};

export default function RegionalStructure() {
  const router = useRouter();
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"} className="w-full bg-white px-4 py-12 md:px-24">
      <div className="md:w-[80%] xl:w-[50%] mx-auto">
        {/* Title */}
        <div
          className="relative mx-auto mb-12 h-[180px] w-[300px] md:w-[400px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/structureborder2.png')" }}
        >
          <p className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-primary3">
            {t.title}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.items.map((item, i) => (
            <div
              key={i}
              onClick={() => {router.push(item.href)}}
              className="rounded-xl cursor-pointer bg-gradient-to-b from-primary to-primary2 hover:bg-gradient-to-b hover:from-primary hover:to-primary3  p-6 text-white shadow-md"
            >
              <div className="mb-2 flex items-center gap-2 text-white">
                {item.icon}
              </div>
                <h3 className="text-sm pb-4 font-semibold">{item.heading}</h3>
              <p className="text-xs text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
