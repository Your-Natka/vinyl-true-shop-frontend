"use client";

import { store } from "@/store/store";
// import { routing } from "@/i18n/routing";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
// import { notFound } from "next/navigation";
import React from "react";
import { Provider } from "react-redux";

const AppProvider = ({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </Provider>
    </SessionProvider>
  );
};

export default AppProvider;
