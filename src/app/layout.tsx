import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import LayoutWrapper from "./layoutwrapper";
import React from "react";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "CoderDojo Unsa",
  description: "Aprende a programar con CoderDojo Unsa",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${roboto.variable} font-sans`}>
      <body className="antialiased bg-dojo-light text-dojo-dark">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}