"use client";
import { Locale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import React, { MouseEventHandler, useTransition } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import styles from "./Sidebar.module.css";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("Sidebar");
  const [, startTransition] = useTransition();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const nextLocale = (e.target as HTMLElement).dataset.locale as Locale;

    if (!nextLocale) return;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <div className={styles.btnsContainer}>
      {routing.locales.map((cur, idx) => {
        return (
          <React.Fragment key={cur}>
            <button className={styles.langBtn} onClick={handleClick} data-locale={cur}>
              {t(`locales.${cur}`)}
            </button>
            {idx === 0 && <span>/</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
}
