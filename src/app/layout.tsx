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
  metadataBase: new URL("https://nodods.com"),
  title: {
    default: "Nodods Holdings | The World's Best for Everyday People",
    template: "%s | Nodods Holdings",
  },
  description:
    "Nodods Holdings is a mission-driven company dedicated to being the world's best for everyday people. Through impact-driven ventures like Rand4U, we address fundamental human needs and empower communities across South Africa.",
  keywords: [
    "Nodods Holdings",
    "Rand4U",
    "blockchain rewards",
    "cryptocurrency",
    "South Africa",
    "financial empowerment",
    "everyday people",
    "Cape Town",
    "digital currency",
    "referral rewards",
  ],
  authors: [{ name: "Nodods Holdings" }],
  creator: "Nodods Holdings (Pty) Ltd",
  publisher: "Nodods Holdings",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://nodods.com",
    siteName: "Nodods Holdings",
    title: "Nodods Holdings | The World's Best for Everyday People",
    description:
      "Mission-driven company building impact-driven ventures for everyday people across generations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nodods Holdings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nodods Holdings | The World's Best for Everyday People",
    description:
      "Mission-driven company building impact-driven ventures for everyday people across generations.",
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
