"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguageStore } from "~/APIs/store";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const translations = {
  ar: {
    title: "تواصل معنا",
    desc: "نحن نرحب بتواصلكم واستفساراتكم، يمكنكم الاتصال بنا من خلال أي من الوسائل التالية أو تعبئة النموذج أدناه",
    location: "المقر الرئيسي",
    locationDesc: "5 شارع التحرير ميدان الدقي - الجيزة - مصر",
    showMap: "عرض الخريطة",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    officesTitle: "مكاتبنا الإقليمية",
    offices: [
      { city: "محافظة الإسكندرية", address: "شارع فؤاد بجانب كلية الهندسة" },
      { city: "محافظة سوهاج", address: "شارع النصر أمام المحافظة" },
    ],
  },
  en: {
    title: "Contact Us",
    desc: "We welcome your communication and inquiries. You can reach us through any of the methods below or fill out the form.",
    location: "Main Office",
    locationDesc: "5 El Tahrir St., Dokki Sq., Giza, Egypt",
    showMap: "Show Map",
    phone: "Phone",
    email: "Email",
    officesTitle: "Our Regional Offices",
    offices: [
      {
        city: "Alexandria Governorate",
        address: "Fouad St. next to the Faculty of Engineering",
      },
      {
        city: "Sohag Governorate",
        address: "El Nasr St. in front of the Governorate",
      },
    ],
  },
};

export default function ContactSection() {
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="flex justify-center bg-white px-4 pb-16 pt-28 text-center md:px-24"
    >
      <div className="w-[80%]">
        <h2 className="mb-2 text-2xl font-bold text-primary3 md:text-4xl">
          {t.title}
        </h2>
        <p className="mb-12 text-sm text-gray-600">{t.desc}</p>

        {/* Cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex h-full flex-col items-start justify-between rounded-lg bg-gradient-to-b from-primary3 to-primary2 p-6 text-white">
            <MapPin size={16} className="mb-2" />
            <span>{t.location}</span>
            <p className="my-2 text-xs text-white/90">{t.locationDesc}</p>
            <button className="mt-3 w-fit cursor-pointer rounded-md bg-purple px-4 py-2 text-xs">
              {t.showMap}
            </button>
          </div>
          <div className="rounded-lg bg-gradient-to-b from-primary3 to-primary2 p-6 text-white">
            <div className="mb-2 flex h-full flex-col items-start justify-between gap-2 text-sm font-bold">
              <Phone size={16} />
              <span>{t.phone}</span>
              <p className="text-xs text-gray-400">+20 2 12345678</p>
              <p className="text-xs text-gray-400">+20 2 98765432</p>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-b from-primary3 to-primary2 p-6 text-white">
            <div className="mb-2 flex h-full flex-col items-start justify-between gap-2 text-sm font-bold">
              <Mail size={16} />
              <span>{t.email}</span>
              <p className="text-xs text-gray-400">info@mostaqbalwatan.eg</p>
              <p className="text-xs text-gray-400">contact@mostaqbalwatan.eg</p>
            </div>
          </div>
        </div>

        {/* Regional offices */}
        <div className="flex justify-center">
          <h3 className="mb-6 w-fit border-b border-yellow-300 text-4xl font-bold text-primary3">
            {t.officesTitle}
          </h3>
        </div>

        <div className="flex flex-col gap-6">
          {t.offices.map((office, i) => (
            <div key={i} className="flex items-center justify-between gap-2">
              {/* Arrow icon */}
              <span className="text-sm text-primary3">
                {lang === "ar" ? <IoIosArrowForward /> : <IoIosArrowBack />}
              </span>

              <div className="flex gap-2">
                {/* Text */}
                <div className="text-end text-sm">
                  <p className="font-semibold text-black">{office.city}</p>
                  <p className="text-xs text-gray-500">{office.address}</p>
                </div>
                {/* Address */}
                <div className="flex h-10 w-10 items-center gap-2 rounded-md bg-[#F4F4FF] px-3 py-1 text-xs text-primary3">
                  <MapPin size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
