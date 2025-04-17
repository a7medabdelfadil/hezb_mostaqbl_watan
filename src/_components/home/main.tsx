/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { FaAward, FaRegFileAlt, FaRegStar, FaSyncAlt } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { useLanguageStore } from "~/APIs/store";

// الترجمة
const translations = {
  ar: {
    servicesTitle: "خدمات حزب مستقبل وطن",
    servicesDesc:
      "نحرص على تقديم خدمات مجتمعية وتنموية تهم حياة المواطنين بشكل مباشر، ونسعى إلى دعم الفئات الأكثر احتياجًا من خلال مبادرات صحية، تعليمية، اجتماعية واقتصادية في جميع أنحاء الجمهورية",
    serviceTabs: [
      {
        label: "تجديد العضوية",
        icon: <FaSyncAlt className="text-md lg:text-2xl xl:text-4xl" />,
      },
      {
        label: "تقديم استمارات الانضمام",
        icon: <FaRegFileAlt className="text-md lg:text-2xl xl:text-4xl" />,
      },
      {
        label: "دليل الأعضاء والمسؤولين",
        icon: <LuUsers className="text-md lg:text-2xl xl:text-4xl" />,
      },
      {
        label: "دليل المزايا والتسهيلات (كارت أمانيا)",
        icon: <FaAward className="text-md lg:text-2xl xl:text-4xl" />,
      },
      {
        label: "تقييم الخدمات والأنشطة",
        icon: <FaRegStar className="text-md lg:text-2xl xl:text-4xl" />,
      },
    ],
    eventsTitle: "فعاليات حزب مستقبل وطن",
    eventsDesc:
      "من خلال فعالياتنا المستمرة نلتقي بالمواطنين، نناقش القضايا، ونطلق مبادرات تهدف لتحسين حياة وطن يليق بنا جميعًا",
    showMore: "عرض المزيد",
    cards: [
      {
        dateDay: "4",
        dateMonth: "April",
        title: "قوافل طبية مجانية لخدمة المواطنين",
        desc: "تنظم أمانة الحزب قوافل طبية مجانية للكشف المبكر عن الأمراض وتقديم التوعية الصحية.",
        image: "/images/event3home.png",
        volunteer: "تسجيل مسبق (تطوع)",
      },
      {
        dateDay: "20",
        dateMonth: "May",
        title: "تنظيم معارض مستلزمات المدارس",
        desc: "بأسعار مخفضة ضمن الاستعدادات للعام الدراسي الجديد، لدعم بناء المستقبل.",
        image: "/images/event2home.png",
        volunteer: "تسجيل مسبق (تطوع)",
      },
      {
        dateDay: "24",
        dateMonth: "Feb",
        title: "حملات توعية سياسية ومجتمعية",
        desc: "نقوم بندوات توعية للتثقيف السياسي لدى المواطنين وتعريفهم على الانتخابات المحلية.",
        volunteer: "تسجيل مسبق",
        image: "/images/event1home.png",
      },
    ],
  },
  en: {
    servicesTitle: "Mostaqbal Watan Party Services",
    servicesDesc:
      "We are committed to providing community and development services that directly impact citizens' lives. We aim to support the most vulnerable groups through health, educational, social, and economic initiatives across the country.",
    serviceTabs: [
      {
        label: "Membership Renewal",
        icon: <FaSyncAlt className="text-md lg:text-2xl xl:text-4xl" />,
      },
      {
        label: "Submit Membership Forms",
        icon: <FaRegFileAlt className="text-md lg:text-2xl xl:text-4xl" />,
      },
      {
        label: "Members and Officials Guide",
        icon: <LuUsers className="text-md lg:text-2xl xl:text-4xl" />,
      },
      {
        label: "Benefits & Discounts Guide (Amaneya Card)",
        icon: <FaAward className="text-md lg:text-2xl xl:text-4xl" />,
      },
      {
        label: "Services and Activities Feedback",
        icon: <FaRegStar className="text-md lg:text-2xl xl:text-4xl" />,
      },
    ],
    eventsTitle: "Mostaqbal Watan Party Events",
    eventsDesc:
      "Through our continuous events, we meet citizens, discuss issues, and launch initiatives that aim to improve the quality of life for everyone in our beloved country.",
    showMore: "Show More",
    cards: [
      {
        dateDay: "4",
        dateMonth: "April",
        title: "Free Medical Convoys for Citizens",
        desc: "The party organizes free medical convoys for early disease detection and health awareness.",
        image: "/images/event3home.png",
        volunteer: "Pre-registration (Volunteer)",
        
      },
      {
        dateDay: "20",
        dateMonth: "May",
        title: "Back-to-School Supplies Exhibitions",
        desc: "Discounted prices to support students as they prepare for the new academic year.",
        image: "/images/event2home.png",
      volunteer: "Pre-registration (Volunteer)",
    },
    {
      dateDay: "24",
        dateMonth: "Feb",
        title: "Political and Social Awareness Campaigns",
        desc: "We hold seminars to educate citizens politically and raise awareness about local elections.",
        image: "/images/event1home.png",
        volunteer: "Pre-registration",
      },
    ],
  },
};

function Main() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.ar;

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="w-full bg-[#F5F5F5] text-white"
    >
      {/* Services */}
      <section
        dir={language === "ar" ? "rtl" : "ltr"}
        className="relative bg-gradient-to-b from-[#100240] to-[#100240] px-4 pb-80 pt-12 text-white md:px-24 md:pb-16"
      >
        <div
          dir={language === "ar" ? "rtl" : "ltr"}
          className={`flex items-center gap-8`}
        >
          {/* Image */}
          <div className="hidden md:block">
            <img
              src="/images/mainHome.png"
              alt="خدمات الحزب"
              className="w-full rounded-[2rem] shadow-xl"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="mb-4 text-md font-bold md:text-3xl">
              {t.servicesTitle}
            </h2>
            <p className="mb-6 max-w-xl text-xs md:text-sm leading-loose text-white/90">
              {t.servicesDesc}
            </p>
            <div className="bg-bg1 absolute -bottom-10 left-0 w-full py-4 lg:left-10 lg:w-[95%] lg:rounded-xl">
              <div className="flex max-md:flex-col justify-between md:flex-nowrap">
                {t.serviceTabs.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-4 rounded-lg px-2 py-2 text-sm text-white shadow-md transition hover:bg-black md:gap-1 lg:gap-2 lg:px-4">
                      <span className="rounded-full bg-secondary p-4 text-lg text-black">
                        {item.icon}
                      </span>
                      <span className="lg:text-md max-w-[250px] text-xs xl:text-lg">
                        {item.label}
                      </span>
                    </div>

                    {/* Divider for desktop only */}
                    {i !== t.serviceTabs.length - 1 && (
                      <div className="mx-3 hidden h-auto w-px bg-[linear-gradient(to_top,transparent,#207CEB,transparent)] md:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Events */}
      <section className="bg-white px-4 pb-12 pt-20 text-black md:px-24">
        <h2 className="text-primary3 mb-2 text-xl font-bold md:text-2xl">
          {t.eventsTitle}
        </h2>
        <p className="mb-8 max-w-3xl text-sm text-gray-700">{t.eventsDesc}</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {t.cards.map((card, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg bg-[#F9F9F9] shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <div className="flex items-end">
                  <div className="flex h-12 w-12 flex-col content-center justify-center bg-primary p-2 text-sm font-bold text-white">
                    <span>{card.dateDay}</span>
                    <span>{card.dateMonth}</span>
                  </div>
                  <p className={`${language === "ar" ? "border-r-4" : "border-l-4 "} px-2 mx-2 text-sm h-6 border-red-500`}>{card.volunteer}</p>
                </div>
                  <h3 className="text-md mt-2 font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="rounded-full bg-secondary px-6 py-2 text-white transition hover:bg-secondary/90">
            {t.showMore}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Main;
