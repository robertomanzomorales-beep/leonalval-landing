import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transportes Leonalval",
  description:
    "Transporte de carga especializada para minería, industria y logística.",
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