import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Vikash Kalyani Sankararaman",
  description:
    "AI/ML engineer and researcher based in Zurich — intelligent systems and human-centered software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans overflow-x-hidden bg-canvas text-ink">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
