import "@/app/globals.css";
import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
