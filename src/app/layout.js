import { Inter } from "next/font/google";
import "./globals.css";
import Navbars from "src/components/Navbar/Page";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./RootLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netgenie",
  description: "Transform your ideas into reality with our expert-driven, creative tech solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/Logos/Genie.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} ${styles.body}`}>
        <NextUIProvider>
          <Navbars />
          <main className={styles.main}>
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
