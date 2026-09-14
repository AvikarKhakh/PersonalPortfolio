import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
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
