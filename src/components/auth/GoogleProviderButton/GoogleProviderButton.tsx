import CustomButton from "@/components/ui/CustomButton/CustomButton";
import GoogleIcon from "/public/icons/google-icon.svg";
import React from "react";
import { signIn } from "next-auth/react";
import { appPaths } from "@/config/navigation";

interface GoogleProviderButtonProps {
  label: string;
}

const GoogleProviderButton = ({ label }: GoogleProviderButtonProps) => {
  const signInWithGoogle = async () => {
    signIn("google", { callbackUrl: appPaths.account });
  };
  return <CustomButton text={label} variant="outlined" startIcon={<GoogleIcon />} onClick={signInWithGoogle} />;
};

export default GoogleProviderButton;
