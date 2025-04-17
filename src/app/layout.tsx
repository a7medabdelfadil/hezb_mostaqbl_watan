/* eslint-disable @next/next/no-img-element */
"use client";
import "~/styles/globals.css";
import { Cairo } from 'next/font/google'
import Navbar from "~/_components/NavBar";
import { useLanguageStore } from "~/APIs/store";


const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
})
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const lang = useLanguageStore((s) => s.language);

  return (
    <html
      lang="en"
      className={`${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title> {lang === "ar" ? "مستقبل حزب وطن" : "Mostaqbal Watan Party"} </title>
        <meta name="description" content={lang === "ar" ? "مستقبل حزب وطن" : "Mostaqbal Watan Party"} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, initial-scale=1.0, user-scalable=yes"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="font-cairo bg-white text-textPrimary">
        <Navbar />
        {children}
      </body>

    </html>
  );
}
