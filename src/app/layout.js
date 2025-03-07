import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./RootLayout.module.css";
import Nav from "src/components/Nav/Nav";
const inter = Inter({ subsets: ["latin"] });
// const geistSans = localFont({
//   src: "/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Starshape",
  description: "Transform your ideas into reality with our expert-driven, creative tech solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/Logos/saa.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} ${styles.body}`}>

          <Nav/>
          <main className={styles.main}>
            {children}
          </main>
      </body>
    </html>
  );
}
