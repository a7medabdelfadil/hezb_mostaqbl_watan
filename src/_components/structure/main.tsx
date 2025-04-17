"use client";

import Image from "next/image";
import { useLanguageStore } from "~/APIs/store";
import MemberCard from "../MemberCard";

const translations = {
  ar: {
    president: "رئيس الحزب",
    vice: "نائب رئيس الحزب",
    name: "المستشار / عبدالوهاب عبدالرازق حسن",
    role: "رئيس الحزب",
    member: "النائب / أحمد عبدالجواد محمد",
    memberRole: "نائب رئيس الحزب للشؤون العامة",
    assistants: "أمناء عام مساعدين",
    central: "أمناء الامانات المركزية",
    viewMore: "عرض المزيد",
  },
  en: {
    president: "Party President",
    vice: "Vice President",
    name: "Counselor / Abdelwahab Abdelrazek Hassan",
    role: "Party President",
    member: "MP / Ahmed Abdeljawad Mohamed",
    memberRole: "Vice President for Public Affairs",
    assistants: "Assistant Secretaries",
    central: "Central Secretaries",
    viewMore: "View More",
  },
};

export default function StructureSection() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.ar;

  const titleImage = (text: string) => (
    <div
      className="relative mx-auto mb-8 h-[200px] w-[300px] md:w-[500px] bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/structureborder2.png')" }}
    >
      <p className="absolute inset-0 flex items-center justify-center text-xl md:text-3xl font-bold text-primary3">
        {text}
      </p>
    </div>
  );

  return (
    <section className="w-full bg-white px-4 py-10 text-center">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title 1 */}
        <div
          className="relative mx-auto mb-8 h-[250px] w-[300px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/structureborder.png')" }}
        >
          <p
            className={`absolute inset-0 flex items-center justify-center ${language === "ar" ? "text-4xl" : "text-2xl"} font-bold text-primary3`}
          >
            {t.president}
          </p>
        </div>

        {/* President Card */}
        <div className="mb-16 flex justify-center">
          <MemberCard
            name={t.name}
            role={t.role}
            image="/images/almostasharabdelwahab.png"
          />
        </div>

        {/* Title 2 */}
        {titleImage(t.vice)}

        {/* Vice Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {[...Array(4)].map((_, i) => (
            <MemberCard
              key={i}
              name={t.member}
              role={t.memberRole}
              image="/images/ahmedmohamedabdelgawad.png"
            />
          ))}
        </div>

        {/* Assistants */}
        {titleImage(t.assistants)}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
          {[...Array(4)].map((_, i) => (
            <MemberCard
              key={i}
              name={t.member}
              role={t.memberRole}
              image="/images/ahmedmohamedabdelgawad.png"
            />
          ))}
        </div>
        <button className="mx-auto mb-16 rounded-full bg-secondary px-4 py-1 text-sm text-white">
          {t.viewMore}
        </button>

        {/* Central Secretaries */}
        {titleImage(t.central)}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
          {[...Array(8)].map((_, i) => (
            <MemberCard
              key={i}
              name={t.member}
              role={t.memberRole}
              image="/images/ahmedmohamedabdelgawad.png"
            />
          ))}
        </div>
        <button className="mx-auto mt-4 rounded-full bg-secondary px-4 py-1 text-sm text-white">
          {t.viewMore}
        </button>
      </div>
    </section>
  );
}
