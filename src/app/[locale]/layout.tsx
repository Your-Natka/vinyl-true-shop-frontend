import type { Metadata } from "next";
import "./globals.css";
// import { NextIntlClientProvider, hasLocale } from "next-intl";
// import { SessionProvider } from "next-auth/react";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { onest, unbounded, publicSans } from "../fonts";
import AppProvider from "../context/AppProvider";
import { hasLocale } from "next-intl";

export const metadata: Metadata = {
  title: "Vinyl True Shop",
  description:
    "A curated collection of high-quality vinyl records, featuring classic albums, limited editions, " +
    "and the latest releases.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`scroll-smooth ${onest.variable} ${unbounded.variable} ${publicSans.variable}`}>
      <body>
        <AppProvider locale={locale} messages={messages}>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
