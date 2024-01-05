// import {FloatButton} from "antd"
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../../(private)/providers";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavSideBar } from "./components/NavSideBar";
import "./globals.css";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <Header />
      <body className="h-screen w-screen flex flex-col items-center ">
            <Theme>
              {children}
              {/* <FloatButton description="contact us" icon={<EnvelopeClosedIcon />} shape="square" className="w-[100px] bg-zinc-500"/> */}
            </Theme>
      </body>
        <Footer />
    </html>
  );
}