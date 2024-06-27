import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saad Ahmad | Web Developer Portfolio",
  description:
    "Portfolio of Saad Ahmad, a web developer specializing in Next.js and React.",
  keywords:
    "Saad Ahmad, Web Developer, Portfolio, Next.js, React, Frontend, Backend, ShadCN, Fullstack, Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
