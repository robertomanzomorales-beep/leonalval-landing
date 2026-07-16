import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Transportes Leonalval | Transporte y logística en Antofagasta",
    template: "%s | Transportes Leonalval",
  },

  description:
    "Servicios de transporte de carga, logística y apoyo operativo para empresas mineras e industriales en Antofagasta. Transporte de carga sobredimensionada, BESS, carga peligrosa, almacenaje y equipos especializados.",

  keywords: [
    "Transportes Leonalval",
    "transporte de carga Antofagasta",
    "transporte para minería",
    "logística industrial",
    "carga sobredimensionada",
    "transporte BESS",
    "carga peligrosa",
    "almacenaje Antofagasta",
    "transporte industrial",
  ],

  authors: [
    {
      name: "Transportes Leonalval",
    },
  ],

  creator: "Transportes Leonalval",
  publisher: "Transportes Leonalval",

  metadataBase: new URL("https://leonalval.cl"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Transportes Leonalval | Transporte y logística en Antofagasta",
    description:
      "Soluciones de transporte, logística y apoyo operativo para minería, industria y empresas de la Región de Antofagasta.",
    url: "https://leonalval.cl",
    siteName: "Transportes Leonalval",
    locale: "es_CL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Transportes Leonalval | Transporte y logística",
    description:
      "Servicios de transporte especializado, logística, almacenaje y apoyo operativo en Antofagasta.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}