"use client";

import Image from "next/image";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    aboutTitle: "من نحن",
    aboutText:
      "حزب سياسي مصري وطني، تأسس من أجل دعم الدولة المصرية وبناء مستقبل أفضل لجميع المواطنين. يعمل الحزب على تمكين الشباب، تعزيز العدالة الاجتماعية، والمشاركة في الحياة السياسية من خلال كوادر مؤهلة ومبادرات تنموية في جميع محافظات الجمهورية. يضم الحزب أمانات تنظيمية ودوائر مركزية متخصصة، ويسعى لتحقيق رؤيته ببناء دولة مدنية حديثة شاملة على التعددية والمواطنة والعمل المجتمعي.",
    visionTitle: "نشأة الحزب",
    visionText:
      "تأسس حزب مستقبل وطن في عام 2014 كحزب سياسي مصري يهدف إلى المساهمة في بناء مستقبل مصر وتحقيق التنمية الشاملة. أطلق الحزب من رؤية ونهج يستهدف تعزيز الاستقرار السياسي والاقتصادي والاجتماعي، والعمل على تفعيل الطاقات الشبابية في حياة كريمة. يسعى الحزب منذ تأسيسه إلى المشاركة الفاعلة في الحياة السياسية المصرية من خلال تقديم برامج وحلول عملية للتحديات التي تواجه الوطن، والمساهمة في صناعة القرار السياسي بما يخدم المصلحة العامة.",
  },
  en: {
    aboutTitle: "Who We Are",
    aboutText:
      "A patriotic Egyptian political party founded to support the state and build a better future for all citizens. The party empowers youth, promotes social justice, and participates in public life through qualified members and developmental initiatives across all governorates. It includes specialized departments and aims to build a modern, inclusive civil state based on diversity and active citizenship.",
    visionTitle: "Party Foundation",
    visionText:
      "The Mostaqbal Watan Party was founded in 2014 as a political party with a vision to contribute to Egypt’s future and comprehensive development. The party seeks to enhance political, economic, and social stability and to activate youth capabilities. It aims to provide practical programs to face national challenges and participate in decision-making processes that serve the public interest.",
  },
};

export default function AboutIntro() {
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="w-full bg-white px-4 py-16 text-primary3 md:px-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        {/* من نحن */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="mx-auto w-[300px]">
            <Image
              src="/images/aboutmain1.png"
              alt="logo1"
              width={500}
              height={500}
              className="rounded-[2rem] border-[6px] border-primary3"
            />
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold text-primary3 md:text-2xl">
              {t.aboutTitle}
            </h2>
            <p className="text-sm leading-loose text-gray-800">{t.aboutText}</p>
          </div>
        </div>

        {/* نشأة الحزب */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-4 inline-block border-b-2 border-yellow-400 text-xl font-bold text-primary3 md:text-2xl">
              {t.visionTitle}
            </h2>
            <p className="text-sm leading-loose text-gray-800">
              {t.visionText}
            </p>
          </div>
          <div className="order-1 mx-auto w-[300px] md:order-2">
            <Image
              src="/images/aboutmain2.png"
              alt="logo2"
              width={500}
              height={500}
              className="rounded-[2rem] border-[6px] border-primary3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
