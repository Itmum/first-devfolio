import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Itmum Sadiq Rahman | Aspiring Full-Stack Developer",
  description: "Portfolio of Itmum Sadiq Rahman, a CSE student at ULAB building web apps with Next.js, React and TypeScript.",
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
