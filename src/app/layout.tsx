import "@/app/globals.css";
import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import Footer from "@/ui/footer/Footer";
import Header from "@/ui/header/Header";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Componentes React",
  description: "Componentes padrões do React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={geist.variable}>
      <body className="bg-background min-h-screen font-sans">
        <ThemeProviderWrapper>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
