import React from "react";
import style from "./AuthAlternativeBlock.module.css";
import { Link } from "@/i18n/navigation";
import GoogleProviderButton from "../GoogleProviderButton/GoogleProviderButton";
import { useTranslations } from "next-intl";

interface AuthAlternativeBlockProps {
  text: string;
  label: string;
  link: string;
}

const AuthAlternativeBlock = ({ text, label, link }: AuthAlternativeBlockProps) => {
  const t = useTranslations("Auth");
  return (
    <div className={style.block}>
      <div>
        <span style={{ marginRight: "10px" }}>{text}</span>
        <Link className="link-primary" href={link}>
          {label}
        </Link>
      </div>

      <div className={style.divider}>
        <div className={style["divider-line"]}></div>
        <span style={{ margin: "0 20px" }}>{t("divider")}</span>
        <div className={style["divider-line"]}></div>
      </div>

      <GoogleProviderButton label={t("google-btn")} />
    </div>
  );
};

export default AuthAlternativeBlock;
