// Next
import type { Metadata } from "next";
// Styles
import "./globals.css";
// Components
import Header from "./components/header-client/header-client";
import Footer from "./components/footer/footer";
// Fonts
import { Nunito, Ubuntu } from "next/font/google";

export const metadata: Metadata = {
  title: "Andy AD",
  description: "Personal portfolio of Andy Agyei-Dwumah",
  authors: [{ name: "Andy Agyei-Dwumah" }],
  openGraph: {
    title: "Andy AD",
    description: "Personal portfolio of Andy Agyei-Dwumah",
    type: "website",
    url:
      process.env.NODE_ENV === "production"
        ? "https://andyagdw.github.io/personal_portfolio/"
        : "localhost:3000",
  },
};

export const nunito = Nunito({
  weight: "500",
  variable: "--font-nunito",
});

export const ubuntu = Ubuntu({
  weight: "400",
  variable: "--font-ubuntu",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${ubuntu.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
