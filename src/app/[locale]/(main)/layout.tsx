import FooterSection from "@/components/layout/Footer/footer";
import Header from "@/components/layout/Header/Header";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import Container from "@/components/ui/Container/Container";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <header>
          <Container>
            <Header />
          </Container>
        </header>
        <main>{children}</main>
        <FooterSection />
      </div>
    </div>
  );
}
