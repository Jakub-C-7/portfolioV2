import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jakub Chamera | Portfolio",
  description:
    "Portfolio website for Jakub Chamera, a Software Engineer working from rainy Newtown, Wales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
