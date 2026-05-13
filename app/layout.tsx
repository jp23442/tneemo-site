import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { StatusBar } from "@/components/StatusBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable}`}
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
