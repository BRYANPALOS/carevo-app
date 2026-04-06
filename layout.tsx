import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAREVO | Garage automobile à Biesles",
  description:
    "CAREVO à Biesles : entretien, réparation, diagnostic électronique, pare-brise, achat, vente et reprise de véhicules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}