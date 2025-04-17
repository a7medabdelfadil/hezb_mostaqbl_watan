"use client";

import { useLanguageStore } from "~/APIs/store";
import { GraduationCap, Eye, Landmark, Home, Users, HeartPulse, BookOpen } from "lucide-react";

const translations = {
  ar: {
    title: "الرؤية والبرنامج السياسي",
    desc: "يسعى حزب مستقبل وطن إلى بناء دولة مصرية حديثة تحقق العدالة الاجتماعية والتنمية المستدامة، وتعزز مكانة مصر إقليميًا ودوليًا.",
    items: [
      { title: "الاقتصاد", text: "تحقيق نمو اقتصادي مستدام وتشجيع الاستثمار وخلق فرص عمل للشباب", icon: <Landmark /> },
      { title: "الصحة", text: "توفير خدمات صحية متكاملة وشاملة لجميع المواطنين وتطوير البنية التحتية للمستشفيات", icon: <HeartPulse /> },
      { title: "التعليم", text: "تطوير المنظومة التعليمية وربطها بسوق العمل وتعزيز البحث العلمي والابتكار", icon: <GraduationCap /> },
      { title: "الإسكان", text: "توفير سكن لائق للمواطنين وتطوير المناطق العشوائية وإنشاء مدن جديدة", icon: <Home /> },
      { title: "الشباب والرياضة", text: "تمكين الشباب ودعم الرياضة وتوفير فرص المشاركة المجتمعية", icon: <Users /> },
      { title: "الثقافة", text: "الحفاظ على الهوية المصرية وتعزيز القيم الثقافية ودعم الإبداع الفني والثقافي", icon: <BookOpen /> },
    ],
    regulationTitle: "لائحة الحزب",
    regulationDesc:
      "تنظم اللائحة الداخلية لحزب مستقبل وطن العمل داخل الحزب وتحدد الهياكل التنظيمية والإدارية وآليات اتخاذ القرار وشروط العضوية والانتخابات الداخلية. كما تحدد اللائحة مهام وصلاحيات كل هيئة من هيئات الحزب، وضع الضوابط والإجراءات التي تضمن الشفافية والديمقراطية في إدارة شؤون الحزب.",
    download: "تحميل اللائحة الداخلية (PDF)",
  },
  en: {
    title: "Vision & Political Program",
    desc: "Mostaqbal Watan Party aims to build a modern Egyptian state that achieves social justice and sustainable development, and enhances Egypt’s regional and international position.",
    items: [
      { title: "Economy", text: "Achieving sustainable growth, encouraging investment, and creating jobs for youth", icon: <Landmark /> },
      { title: "Health", text: "Providing comprehensive health services and upgrading hospital infrastructure", icon: <HeartPulse /> },
      { title: "Education", text: "Improving education and linking it to the labor market, promoting research and innovation", icon: <GraduationCap /> },
      { title: "Housing", text: "Providing decent housing, developing slum areas, and establishing new cities", icon: <Home /> },
      { title: "Youth & Sports", text: "Empowering youth and promoting sports and community participation", icon: <Users /> },
      { title: "Culture", text: "Preserving Egyptian identity, promoting culture, and supporting artistic creativity", icon: <BookOpen /> },
    ],
    regulationTitle: "Party Regulations",
    regulationDesc:
      "The internal regulations of Mostaqbal Watan Party organize internal work, define structures and governance, membership conditions, and internal elections. It defines the responsibilities and powers of all party bodies, and ensures transparency and democracy in management.",
    download: "Download Party Regulations (PDF)",
  },
};

export default function VisionSection() {
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"} className="w-full bg-white px-4 py-16 md:px-24">
      <div className="mx-auto max-w-6xl text-center">
        {/* Title & Description */}
        <h2 className="mb-2 text-xl font-bold text-primary3 md:text-2xl">{t.title}</h2>
        <p className="mb-10 text-sm text-gray-700">{t.desc}</p>

        {/* Grid items */}
        <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-gradient-to-b from-primary3 to-primary2 p-6 text-white shadow-md"
            >
              <div className="mb-3 flex flex-col items-start gap-1 justify-between text-sm font-bold">
                <span className="rounded-full bg-primary p-2">{item.icon}</span>
                <span>{item.title}</span>
              </div>
              <p className="text-sm text-white/80">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Regulations Section */}
        <div className="flex flex-col items-start pt-8">
          <h3 className="border-b border-yellow-400 w-full text-start pb-4 mb-3 text-2xl font-bold text-primary3">{t.regulationTitle}</h3>
          <p className="mb-4 text-sm text-gray-700">{t.regulationDesc}</p>
          <button className="rounded-md bg-primary3 px-6 py-2 text-white text-sm hover:bg-primary">
            {t.download}
          </button>
        </div>
      </div>
    </section>
  );
}
