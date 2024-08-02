import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Inter } from "next/font/google";
import "./globals.scss";
import { SITE_NAME } from "@/constants/seo.constans";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import { Header } from "@/components/ui/header/header";

const inter = localFont({ src: '../../public/fonts/graphiklcweb_medium.ttf' });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "Fullstack copy of Netflix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
          <Providers>
            <main>
              {children}
            </main>
          </Providers>
          <Toaster />
      </body>
    </html>
  );
}
