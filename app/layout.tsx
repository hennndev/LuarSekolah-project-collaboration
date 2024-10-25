import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })
 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased w-[1895px]`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
