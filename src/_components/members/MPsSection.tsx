"use client";

import { useLanguageStore } from "~/APIs/store";
import MemberCard from "../MemberCard";

const translations = {
  ar: {
    statsTitle: "إحصائيات نواب الحزب في مجلس النواب",
    statsDesc:
      "نظرة رقمية على تمثيل حزب مستقبل وطن تحت قبة البرلمان، موزعة حسب المحافظات واللجان البرلمانية ونوع العضوية",
    mp: "نائب مجلسي شعبي",
    governorate: "محافظة",
    committee: "لجنة برلمانية",
    title: "نواب الحزب في مجلس النواب",
    subTitle:
      "ممثلو مستقبل وطن تحت قبة البرلمان، صوت المواطن في التشريع والرقابة",
    search: "ابحث عن النائب...",
    btn: "عرض المزيد",
    filters: {
      governorate: "اختر المحافظة",
      type: "اختر النوع البرلماني",
      committee: "اختر اللجنة البرلمانية",
    },
    name: "النائب / أحمد صبري علي",
    role: "القاهرة - التعليم",
    position: "عضو لجنة التعليم",
    searchBtn: "بحث", 
  },
  en: {
    statsTitle: "Mostaqbal Watan MPs in Parliament",
    statsDesc:
      "A numeric view of party representation in parliament, distributed by governorates, committees, and membership types.",
    mp: "Parliament MPs",
    governorate: "Governorates",
    committee: "Committees",
    title: "Party MPs in Parliament",
    subTitle:
      "Mostaqbal Watan representatives in the parliament, voice of the people in legislation and oversight.",
    search: "Search MP...",
    btn: "Show more",
    filters: {
      governorate: "Select Governorate",
      type: "Select Type",
      committee: "Select Committee",
    },
    name: "MP / Ahmed Sabry Ali",
    role: "Cairo - Education",
    position: "Education Committee Member",
    searchBtn: "Search",
  },
};

export default function MPsSection() {
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"} className="w-full bg-white px-4 py-12 text-center md:px-24">
      <div className="w-full mx-auto max-w-6xl">
        {/* Stats */}
        <h2 className="mb-1 text-xl font-bold text-primary3 md:text-4xl">
          {t.statsTitle}
        </h2>
        <p className="mb-6 text-sm text-gray-600">{t.statsDesc}</p>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-bold text-primary3">152</p>
            <span className="text-xs text-purple">{t.mp}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-bold text-primary3">27</p>
            <span className="text-xs text-purple">{t.governorate}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-bold text-primary3">20</p>
            <span className="text-xs text-purple">{t.committee}</span>
          </div>
        </div>

        {/* Section title */}
        <h2 className="mb-1 text-xl font-bold text-primary3 md:text-4xl">
          {t.title}
        </h2>
        <p className="mb-6 text-sm text-gray-600">{t.subTitle}</p>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm">
          
          <select className="rounded-md bg-[#F4F5FB] border px-3 py-2 text-sm text-gray-600">
            <option>{t.filters.governorate}</option>
          </select>
          <select className="rounded-md bg-[#F4F5FB] border px-3 py-2 text-sm text-gray-600">
            <option>{t.filters.type}</option>
          </select>
          <select className="rounded-md bg-[#F4F5FB] border px-3 py-2 text-sm text-gray-600">
            <option>{t.filters.committee}</option>
          </select>
        <input
            type="text"
            placeholder={t.search}
            className="w-60 rounded-md border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="rounded-md bg-primary3 px-4 py-2 text-white text-sm">
          {t.searchBtn}
          </button>
        </div>

        {/* Member cards */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(12)].map((_, i) => (
            <MemberCard
              key={i}
              name={t.name}
              role={t.role}
              image="/images/ahmedmohamedabdelgawad.png"
              position={t.position}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="rounded-md bg-secondary px-6 py-2 text-white text-sm hover:bg-secondary/90">
            {t.btn}
          </button>
        </div>
      </div>
    </section>
  );
}
