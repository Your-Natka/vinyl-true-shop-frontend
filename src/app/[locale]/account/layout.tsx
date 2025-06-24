// app/[locale]/account/layout.tsx
import Sidebar from "@/components/account/Sidebar";
import styles from "./layout.module.css";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
