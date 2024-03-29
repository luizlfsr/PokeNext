import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PokeNext",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen bg-custom-1">
        <NavBar />
        <main className="flex-1 mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
