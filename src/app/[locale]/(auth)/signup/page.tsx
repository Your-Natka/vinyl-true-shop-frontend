"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import style from "../layout.module.css";
import AuthHeading from "@/components/auth/AuthHeading/AuthHeading";
import { RegisterRequest } from "@/types/auth";
import { appPaths } from "@/config/navigation";
import SubmitButton from "@/components/auth/SubmitButton/SubmitButton";
import { RegisterSchema } from "@/app/validation/registerSchema";
import AuthAlternativeBlock from "@/components/auth/AuthAlternativeBlock/AuthAlternativeBlock";
import { useRouter } from "@/i18n/navigation";
import { register } from "@/utils/register";
import FormInput from "@/components/auth/FormInput/FormInput";

const SingupPage = () => {
  const t = useTranslations("Auth");
  const router = useRouter();
  const [signupError, setSignupError] = useState("");

  return (
    <div className={style.form}>
      <AuthHeading subtitle={t("Signup.subtitle")} />
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          phoneNumber: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={async (values: RegisterRequest) => {
          try {
            //register
            await register(values);
            //account created, sign in
            const res = await signIn("credentials", { ...values, redirect: false });

            if (res?.error) throw new Error("LOGIN_FAIL");
            router.push(appPaths.account);
          } catch (err) {
            // saving the error message
            setSignupError(err.message);
          }
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <FormInput
                label={t("fullName")}
                name="fullName"
                type="text"
                error={errors.fullName && touched.fullName}
                touched={touched.fullName}
                helperText={errors.fullName && t(`Errors.${errors.fullName}`)}
              />
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
          );
        }}
      </Formik>

      <AuthAlternativeBlock text={t("Signup.account-exists")} label={t("Signup.login-btn")} link={appPaths.login} />
    </div>
  );
};

export default SingupPage;
