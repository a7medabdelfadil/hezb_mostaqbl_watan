"use client";

import Image from "next/image";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    title: "نموذج التواصل",
    firstName: "الاسم الأول",
    lastName: "الاسم الآخر",
    phone: "الهاتف",
    email: "الإيميل",
    serviceQuestion: "ما هي الخدمة التي تحتاجها ؟",
    options: [
      "الانضمام للحزب",
      "التطوع في الأنشطة",
      "الترشح لانتخابات داخلية",
      "إنتاج محتوى إعلامي",
      "أخرى",
    ],
    messageLabel: "رسالة",
    messagePlaceholder: "اكتب رسالتك...",
    send: "إرسال الرسالة",
  },
  en: {
    title: "Contact Form",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone",
    email: "Email",
    serviceQuestion: "What service do you need?",
    options: [
      "Join the party",
      "Volunteer in activities",
      "Run for internal elections",
      "Media content creation",
      "Other",
    ],
    messageLabel: "Message",
    messagePlaceholder: "Write your message...",
    send: "Send Message",
  },
};

export default function ContactFormSection() {
  const lang = useLanguageStore((s) => s.language);
  const t = translations[lang || "ar"];

  return (
    <section className="w-full bg-white px-4 py-12 md:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mx-auto mb-4 w-fit border-b-2 border-yellow-400 pb-1 text-center text-4xl font-bold text-primary3">
          {t.title}
        </h2>

        <div className="mt-10 flex justify-evenly rounded-2xl">
          <form className="grid grid-cols-2 gap-x-6 gap-y-4 bg-[#C4C4C40D] p-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">{t.firstName}</label>
              <input
                type="text"
                className="border-b border-gray-400 bg-transparent p-1 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">{t.lastName}</label>
              <input
                type="text"
                className="border-b border-gray-400 bg-transparent p-1 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">{t.phone}</label>
              <input
                type="text"
                className="border-b border-gray-400 bg-transparent p-1 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">{t.email}</label>
              <input
                type="email"
                className="border-b border-gray-400 bg-transparent p-1 outline-none"
              />
            </div>

            <div className="col-span-2">
              <p className="mb-2 text-sm font-medium text-gray-700">
                {t.serviceQuestion}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                {t.options.map((label, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="radio" name="service" className="accent-primary3" />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="col-span-2 flex flex-col">
              <label className="text-sm text-gray-600">{t.messageLabel}</label>
              <textarea
                rows={3}
                placeholder={t.messagePlaceholder}
                className="border-b border-gray-400 bg-transparent p-1 outline-none"
              />
            </div>

            <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-2 text-sm text-white"
              >
                {t.send}
              </button>
            </div>
          </form>

          <div className="hidden overflow-hidden rounded-e-2xl md:block">
            <Image
              src="/images/form.png"
              alt="contact"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
