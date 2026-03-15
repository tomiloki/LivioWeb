import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Livio — La operación logística de tu pyme, en orden",
  description:
    "Software de gestión logística para pymes chilenas. Centraliza pedidos, asigna entregas, da seguimiento en tiempo real y cierra el día con evidencia completa.",
  openGraph: {
    title: "Livio — La operación logística de tu pyme, en orden",
    description:
      "Software de gestión logística para pymes chilenas. Centraliza pedidos, asigna entregas, da seguimiento en tiempo real y cierra el día con evidencia completa.",
    url: "https://www.liviogistics.com",
    siteName: "Livio",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body
        className={`${dmSans.variable} ${bricolage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
