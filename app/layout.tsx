import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RenderWorkshop",
  description:
    "A distributed rendering system meticulously designed specifically for Blender",
  keywords: [
    "RenderWorkshop",
    "Blender",
    "render",
    "distributed",
    "remote",
    "rendering",
    "network",
    "cg",
    "image",
    "animation",
  ],
  icons: {
    icon: "/logo/icon.svg",
    shortcut: "/logo/icon.png",
    apple: "/logo/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.renderworkshop.site",
    title: "RenderWorkshop",
    images: "https://www.renderworkshop.site/logo/icon.png",
    description:
      "A distributed rendering system meticulously designed specifically for Blender",
    siteName: "RenderWorkshop",
  },
  twitter: {
    card: "summary_large_image",
    title: "RenderWorkshop",
    description:
      "A distributed rendering system meticulously designed specifically for Blender",
    images: "https://www.renderworkshop.site/logo/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
