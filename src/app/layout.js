
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./RootLayout.module.css";
import Nav from "src/components/Nav/Nav";
import { ViewTransitions } from "next-view-transitions";
import { SpeedInsights } from "@vercel/speed-insights/next"
import ClientWrapper from "utils/Clientwrapper/ClientWrapper";
const inter = Inter({ subsets: ["latin"] });

const modularFont = localFont({
  src: "./fonts/Modular.ttf", // ✅ Correct path from `layout.js`
  variable: "--font-modular",
  weight: "400", // Adjust as needed
  display: "swap",
});

export const metadata = {
  title: "Starshape",
  description: "Transform your ideas into reality with our expert-driven, creative tech solutions",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/Logos/star.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} ${styles.body}`}>
      <ClientWrapper />
          <Nav/>
          <main className={styles.main}>
            {children}
          </main>

          <SpeedInsights />
      </body>
    </html>
    </ViewTransitions>
  );
}
