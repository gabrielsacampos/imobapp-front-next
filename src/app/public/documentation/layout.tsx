import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { Providers } from "../../private/providers";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NavSideBar } from "./components/NavSideBar";

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
    <ClerkProvider localization={ptBR}>
    <html lang="en" className={inter.className}>
      <body>
        <div className="h-screen">
            <Theme>
              <Header />
              <NavSideBar />
              <Providers>{children}</Providers>
            </Theme>
        </div>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
