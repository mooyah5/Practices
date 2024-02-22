import type { Metadata } from "next";
import styles from "./test.module.scss";
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
        <header className={styles.header}>Header</header>
        <div>{children}</div>
      </body>
    </html>
  );
}
