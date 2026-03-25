import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terre de Femmes — Bijouterie de Créateurs à Brest",
  description:
    "Bijouterie de créateurs à Brest. Une sélection pointue de marques françaises — Louise Damas, HARPO, Aurélie Joliff, Satellite Paris. Conseil personnalisé, cadeaux, collections exclusives.",
  keywords: "bijouterie, créateurs, Brest, bijoux, Louise Damas, HARPO, Satellite Paris, cadeau",
  openGraph: {
    title: "Terre de Femmes — Bijouterie de Créateurs à Brest",
    description: "Une sélection pointue de bijoux créateurs à Brest.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
