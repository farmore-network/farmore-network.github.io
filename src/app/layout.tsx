import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f4f5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://farmore.network"),
  title: {
    default: "Farmore — One name. One balance. One account.",
    template: "%s | Farmore",
  },
  description:
    "An open, chain-neutral protocol for unified blockchain identity. One name. One account. One balance.",
  keywords: [
    "Farmore",
    "blockchain identity",
    "unified wallet",
    "chain-neutral protocol",
    "multi-chain",
    "self-custodial",
    "Web3 handle",
    "cross-chain",
  ],
  authors: [{ name: "Farmore" }],
  creator: "Farmore",
  publisher: "Farmore",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://farmore.network",
    siteName: "Farmore",
    title: "Farmore — One name. One balance. One account.",
    description:
      "An open, chain-neutral protocol for unified blockchain identity.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Farmore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmore — One name. One balance. One account.",
    description:
      "An open, chain-neutral protocol for unified blockchain identity.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-nodods-light text-nodods-navy min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
