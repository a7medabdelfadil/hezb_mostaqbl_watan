"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  ar: {
    followUs: "تابعونا عبر",
    links: [
      { label: "الشروط والأحكام", href: "#" },
      { label: "سياسة الخصوصية", href: "#" },
      { label: "الأسئلة الشائعة", href: "#" },
    ],
    copyright: "جميع الحقوق محفوظة لحزب مستقبل وطن © 2025",
  },
  en: {
    followUs: "Follow us on",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "FAQs", href: "#" },
    ],
    copyright: "All rights reserved for Mostaqbal Watan Party © 2025",
  },
};

const Footer = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.ar;

  return (
    <footer dir={language === "ar" ? "rtl" : "ltr"} className="text-white">
      <div className="flex flex-col items-center justify-between gap-4 bg-gradient-to-b from-primary to-primary2 px-6 py-8 md:flex-row md:px-24">
        {/* Social */}
        <div className="flex items-center gap-4 text-lg">
          <span className="text-sm">{t.followUs}</span>
          <div className="flex items-center gap-3">
            <FaTwitter className="cursor-pointer hover:text-secondary" />
            <FaInstagram className="cursor-pointer hover:text-secondary" />
            <FaFacebookF className="cursor-pointer hover:text-secondary" />
          </div>
        </div>

        {/* Links & Logo */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
          {t.links.map((link, i) => (
            <a key={i} href={link.href} className="hover:text-secondary">
              {link.label}
            </a>
          ))}
          <div className="w-20">
            <Image
              src="/images/footer.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-primary to-primary2 py-3 text-center text-xs">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
