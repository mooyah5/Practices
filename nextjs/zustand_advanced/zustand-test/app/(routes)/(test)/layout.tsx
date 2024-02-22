import Link from "next/link";
import type { Metadata } from "next";
import styles from "./test.module.scss";
import { LoginButton } from "@/app/component/button/LoginButton";
export const metadata: Metadata = {
  title: "Test_folder",
  description: "test_description",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Link href="/">HOME</Link>
          <Link href="/test1">SCSS 문법</Link>
          <Link href="/test2">Zustand</Link>
        </header>
        <div>{children}</div>
        <div>
          <LoginButton />
        </div>
      </body>
    </html>
  );
}
