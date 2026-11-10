import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MyScol | Logiciel de gestion scolaire",
  description:
    "Plateforme tout-en-un pour piloter la gestion quotidienne de votre établissement scolaire : inscriptions, vie scolaire, finances et communication.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Aller au contenu
        </a>
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
