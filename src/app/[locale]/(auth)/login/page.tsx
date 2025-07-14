"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { signIn, useSession } from "next-auth/react";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import style from "../layout.module.css";
import AuthHeading from "@/components/auth/AuthHeading/AuthHeading";
import GoogleProviderButton from "@/components/auth/GoogleProviderButton/GoogleProviderButton";
import { LoginRequest } from "@/types/auth";
import { appPaths } from "@/config/navigation";
import SubmitButton from "@/components/auth/SubmitButton/SubmitButton";
import { LoginSchema } from "@/app/validation/loginSchema";
import { TextField } from "@mui/material";
import AuthAlternativeBlock from "@/components/auth/AuthAlternativeBlock/AuthAlternativeBlock";
import { useRouter } from "@/i18n/navigation";
import FormInput from "@/components/auth/FormInput/FormInput";

const LoginPage = () => {
  const t = useTranslations("Auth");
  const [loginError, setLoginError] = useState();
  const router = useRouter();

  return (
    <div className={style.form}>
      <AuthHeading subtitle={t("Signup.subtitle")} />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values: LoginRequest) => {
          try {
            // login
            const response = await signIn("credentials", values, { callbackUrl: appPaths.account });

            if (response?.error) throw new Error("LOGIN_ERROR");
            router.push(appPaths.account);
          } catch (err) {
            setLoginError(err.message);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <FormInput
              label={t("email")}
              name="email"
              type="email"
              error={errors.email && touched.email}
              touched={touched.email}
              helperText={errors.email && t(`Errors.${errors.email}`)}
            />

            <FormInput
              label={t("password")}
              name="password"
              type="password"
              error={errors.password && touched.password}
              touched={touched.password}
              helperText={errors.password && t(`Errors.${errors.password}`)}
            />
            <SubmitButton label={t("continue-btn")} />
          </Form>
        )}
      </Formik>
      <AuthAlternativeBlock text={t("Login.account-exists")} label={t("Login.signup-btn")} link={appPaths.signUp} />
    </div>
  );
};

export default LoginPage;
