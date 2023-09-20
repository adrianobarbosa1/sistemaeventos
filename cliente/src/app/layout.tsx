import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { LayoutProvider } from "./LayoutProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema de Eventos",
  description: "Sistema de criação de eventos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <main>
          <LayoutProvider>{children}</LayoutProvider>
        </main>
      </body>
    </html>
  );
}
