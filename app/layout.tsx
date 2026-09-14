import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  src: "./fonts/manrope-normal-200-800.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-sans",
});
const serif = localFont({
  src: [
    {
      path: "./fonts/instrument-serif-normal-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/instrument-serif-italic-400.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-serif",
});
const mono = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono-normal-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-normal-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avikarkhakh.com"),
  title: "Avikar Khakh — Software Engineer & Technical Cofounder",
  description:
    "Associate Software Engineer at Guardian Life Insurance and Technical Cofounder of Steward. Building across native iOS, backend systems, and the web.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Avikar Khakh — Software Engineer & Technical Cofounder",
    description:
      "Associate Software Engineer at Guardian Life Insurance and Technical Cofounder & Engineering Lead at Steward.",
    url: "/",
    siteName: "Avikar Khakh",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg", apple: "/static/favicons/apple-touch-icon.png" },
};
export const viewport: Viewport = { themeColor: "#f3f1e9" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
