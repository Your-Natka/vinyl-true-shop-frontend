import LogoBlack from "@/components/ui/Logo/LogoBlack";
import { useTranslations } from "next-intl";
import style from "./AuthHeading.module.css";
import React from "react";

interface AuthHeadingProps {
  subtitle: string;
}

const AuthHeading = ({ subtitle }: AuthHeadingProps) => {
  const t = useTranslations("Auth");

  return (
    <div className={style.heading}>
      <div className={style.logo}>
        <LogoBlack />
      </div>
      <h3>{t("title")}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default AuthHeading;
