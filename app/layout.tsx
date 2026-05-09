import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumivex Smartwatch",
  description: "Clinical-grade smartwatch with AI health coaching",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
