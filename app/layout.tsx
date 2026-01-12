import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinematic Architecture",
  description: "A cinematic portrayal of visionary architecture rendered with pure web technologies.",
  openGraph: {
    title: "Cinematic Architecture",
    description: "Atmospheric architectural art built with CSS and WebGL-inspired gradients.",
    type: "website",
    locale: "en_US",
    url: "https://agentic-1ee0cb06.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
