import type { Metadata } from "next";
import "./globals.css";
import { onest, unbounded, publicSans } from "./fonts";
import Header from "@/components/layout/Header/Header";
import Container from "@/components/ui/Container/Container";
import Sidebar from "@/components/layout/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Vinyl True Shop",
  description:
    "A curated collection of high-quality vinyl records, featuring classic albums, limited editions, and the latest releases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${unbounded.variable} ${publicSans.variable}`}
    >
      <body>
        <div className="app-layout">
          <Sidebar />
          <div className="main-content">
            <header>
              <Container>
                <Header />
              </Container>
            </header>
            <main>{children}</main>
            <footer></footer>
          </div>
        </div>
      </body>
    </html>
  );
}
