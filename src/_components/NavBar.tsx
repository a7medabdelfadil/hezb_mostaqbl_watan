"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguageStore } from "~/APIs/store";
import { usePathname } from "next/navigation";

export const translations = {
  ar: {
    home: "الرئيسية",
    about: "عن الحزب",
    structure: "الهيكل التنظيمي",
    members: "النواب",
    center: "مركز الدراسات والسياسات",
    news: "الأخبار",
    contact: "تواصل معنا",
    partyName: "حزب مستقبل وطن",
  },
  en: {
    home: "Home",
    about: "About",
    structure: "Structure",
    members: "Members",
    center: "Policy Center",
    news: "News",
    contact: "Contact",
    partyName: "Mostaqbal Watan Party",
  },
};

export default function Navbar() {
  const pathname = usePathname();

  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t.about, href: "/about" },
    { label: t.structure, href: "/structure" },
    { label: t.members, href: "/members" },
    { label: t.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-4 z-50 flex justify-center px-4">
      <div
        className={`fixed top-4 w-[95%] ${
          open ? "rounded-xl" : "rounded-full"
        } flex flex-wrap items-center justify-between border border-white/20 bg-gradient-to-r from-black/30 via-black/20 to-black/30 px-4 py-2 text-white shadow-md backdrop-blur-md md:px-6`}
      >
        <div className="hidden md:block">
          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
        <div
          dir={language === "ar" ? "rtl" : "ltr"}
          className="flex w-full items-center justify-between md:w-auto"
        >
          {/* Logo in Desktop */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Image
                src="/images/hezb.png"
                alt="شعار الحزب"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="inline text-sm font-bold xl:text-base">
                {t.partyName}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="-mb-1 block md:hidden">
              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
            {/* Mobile Menu Icon */}
            <button
              onClick={() => setOpen(!open)}
              className="text-white md:hidden"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
        {/* Nav Links */}
        <nav
          dir={language === "ar" ? "rtl" : "ltr"}
          className={`${
            open ? "flex" : "hidden"
          } mt-4 w-full ${language === "ar" ? "md:flex-row" : "md:flex-row-reverse"} item flex-col items-stretch gap-2 whitespace-nowrap font-medium md:mt-0 md:flex md:w-auto md:flex-1 md:flex-row md:justify-center ${
            language === "ar" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <Link
            href="/"
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-sm xl:px-4 xl:py-2 ${
              pathname === "/" ? "bg-secondary text-white" : "hover:bg-white/10"
            }`}
          >
            {t.home}
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-2 py-1 xl:px-4 xl:py-2 ${
                pathname === item.href
                  ? "bg-secondary text-white"
                  : "hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Logo in Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="hidden text-sm font-bold sm:inline xl:text-base">
              {t.partyName}
            </span>
            <Image
              src="/images/hezb.png"
              alt="شعار الحزب"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
