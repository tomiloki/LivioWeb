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
  metadataBase: new URL("https://www.liviogistics.com"),
  title: "Livio — Software de gestión logística para pymes con flota propia",
  description:
    "Centraliza pedidos, guía a tus choferes y cierra el día con evidencia. El sistema operativo logístico para pymes de distribución en Chile.",
  alternates: {
    canonical: "https://www.liviogistics.com",
    languages: {
      "es-CL": "https://www.liviogistics.com",
    },
  },
  openGraph: {
    title: "Livio — Software de gestión logística para pymes con flota propia",
    description:
      "Centraliza pedidos, guía a tus choferes y cierra el día con evidencia. El sistema operativo logístico para pymes de distribución en Chile.",
    url: "https://www.liviogistics.com",
    siteName: "Livio",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Livio — Software de gestión logística para pymes de distribución en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Livio — Software de gestión logística para pymes con flota propia",
    description:
      "Centraliza pedidos, guía a tus choferes y cierra el día con evidencia. El sistema operativo logístico para pymes de distribución en Chile.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Livio",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    inLanguage: "es-CL",
    description:
      "Software de gestión logística para pymes chilenas con flota de 1 a 15 vehículos. Centraliza pedidos desde WhatsApp, asigna entregas a choferes con app móvil, registra evidencia digital de cada entrega (foto, firma, GPS) y genera un cierre automático al final del día.",
    url: "https://www.liviogistics.com",
    author: {
      "@type": "Organization",
      name: "Livio SpA",
      url: "https://www.liviogistics.com",
      foundingDate: "2025",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CL",
      },
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CLP",
      description:
        "Piloto gratuito de 2 meses para pymes de distribución en Chile",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué tan difícil es implementar LIVIO en mi empresa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El onboarding lo hacemos nosotros contigo. No necesitas conocimientos técnicos. En 2 semanas ya estás operando con el sistema.",
        },
      },
      {
        "@type": "Question",
        name: "¿Mis choferes necesitan un celular especial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. La app funciona en cualquier smartphone Android o iPhone con conexión a internet. No requiere un equipo nuevo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa después de los 2 meses de piloto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si LIVIO te sirve, seguimos con un precio especial de lanzamiento. Si no, no hay compromiso — tus datos son tuyos y los puedes exportar en cualquier momento.",
        },
      },
      {
        "@type": "Question",
        name: "¿LIVIO reemplaza a mi despachador o coordinador?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. LIVIO le da herramientas al operador para que haga su trabajo más rápido y con menos errores. La persona sigue tomando las decisiones — el sistema ordena la información.",
        },
      },
      {
        "@type": "Question",
        name: "¿Funciona para mi rubro específico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LIVIO está diseñado para pymes con reparto recurrente: agua embotellada, gas, distribución mayorista, Horeca. Si tu operación es pedido → despacho → entrega, te sirve.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo funciona la recepción de pedidos por WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu cliente envía un mensaje de WhatsApp como lo haría normalmente. Una IA interpreta el pedido y lo estructura automáticamente. El operador revisa, confirma y asigna. Las excepciones las resuelve la persona, no el bot.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${bricolage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
