import { Onest, Unbounded, Public_Sans } from "next/font/google";

export const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["400", "500", "700"],
});

export const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["500", "600"],
});

export const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["500"],
});
