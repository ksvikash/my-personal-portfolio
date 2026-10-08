import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
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

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Vikash Kalyani Sankararaman — AI/ML Engineer & Researcher",
  description:
    "AI/ML engineer and researcher at ETH Zürich, specializing in embedded AI, low-power machine learning, and hardware acceleration.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans overflow-x-hidden bg-canvas text-ink antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
