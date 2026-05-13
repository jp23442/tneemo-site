import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { StatusBar } from "@/components/StatusBar";

const ibmPlexSans = localFont({
  src: [
    { path: "../fonts/IBMPlexSans-VariableFont_wdth_wght.ttf", style: "normal" },
    { path: "../fonts/IBMPlexSans-Italic-VariableFont_wdth_wght.ttf", style: "italic" },
  ],
  variable: "--font-ibm-sans",
  display: "swap",
});

const ibmPlexMono = localFont({
  src: [
    { path: "../fonts/IBMPlexMono-Regular.ttf",  weight: "400", style: "normal" },
    { path: "../fonts/IBMPlexMono-Medium.ttf",   weight: "500", style: "normal" },
    { path: "../fonts/IBMPlexMono-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/IBMPlexMono-Bold.ttf",     weight: "700", style: "normal" },
  ],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TNEEMO Industries — Engenharia Industrial e Computação Avançada",
  description:
    "Pesquisa e desenvolvimento em chassis industriais, ligas metálicas avançadas, infraestrutura de rede e computação experimental. Mandaguari, Paraná, Brasil.",
  openGraph: {
    title: "TNEEMO Industries",
    description: "Engenharia onde começa o impossível. Mandaguari, Paraná, Brasil.",
    url: "https://tneemo.com",
    siteName: "TNEEMO Industries",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StatusBar />
      </body>
    </html>
  );
}
