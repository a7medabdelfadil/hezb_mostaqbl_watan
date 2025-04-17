"use client";

import { useLanguageStore } from "~/APIs/store";
import MemberCard from "../MemberCard";
import { IoSearchOutline } from "react-icons/io5";

const translations = {
  ar: {
    title: "أمانات المحافظات",
    desc: "٢٧ أمانة على مستوى محافظات الجمهورية",
    search: "ابحث عن النائب...",
    filter: "اختر المحافظة",
    btn: "عرض المزيد",
    governorates: [
      "القاهرة",
      "الفيوم",
      "البحر الأحمر",
      "الإسكندرية",
      "الشرقية",
      "الغربية",
    ],
  },
  en: {
    title: "Governorate Offices",
    desc: "27 offices across Egypt's governorates",
    search: "Search MP...",
    filter: "Select governorate",
    btn: "Show more",
    governorates: [
      "Cairo",
      "Fayoum",
      "Red Sea",
      "Alexandria",
      "Sharqia",
      "Gharbia",
    ],
  },
};

export default function GovernorateSection() {
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="w-full bg-white px-4 pb-12 pt-28 text-center lg:px-24"
    >
      <div className="mx-auto w-full lg:max-w-[90%]">
        {/* Title */}
        <h2 className="text-2xl font-bold text-primary3 md:text-4xl">
          {t.title}
        </h2>
        <p className="mb-6 text-sm text-gray-600">{t.desc}</p>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder={t.search}
              className="w-full rounded-md border bg-[#F4F5FB] px-3 py-3 pr-10 text-sm outline-none focus:ring-1 focus:ring-secondary"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <IoSearchOutline className="text-textGray" />
            </div>
          </div>

          <select className="rounded-md border bg-[#F4F5FB] px-3 py-2 text-sm text-gray-600 max-md:flex-1">
            <option>{t.filter}</option>
          </select>
          <button className="rounded-md bg-primary3 px-4 py-2 text-sm text-white max-md:flex-1">
            {lang === "ar" ? "بحث" : "Search"}
          </button>
        </div>

        {/* Cards grouped by governorate */}
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-secondary/50 to-transparent md:inline" />

          {t.governorates.map((gov, i) => (
            <div key={i}>
              <h3 className="mb-2 border-b-2 border-yellow-300 pb-1 text-start text-xl font-bold text-primary3">
                محافظة {gov}
              </h3>
              <div className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-2">
                {[...Array(2)].map((_, idx) => (
                  <MemberCard
                    key={idx}
                    name={
                      lang === "ar"
                        ? "النائب / أحمد صبري علي"
                        : "MP / Ahmed Sabry Ali"
                    }
                    role="أمين التعليم"
                    image="/images/ahmedmohamedabdelgawad.png"
                    position=""
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button className="rounded-md bg-secondary px-6 py-2 text-sm text-white hover:bg-secondary/90">
            {t.btn}
          </button>
        </div>
      </div>
    </section>
  );
}
