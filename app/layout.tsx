import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInObserver from "@/components/FadeInObserver";

export const metadata: Metadata = {
  title: "AI Systems for Executive Assistants",
  description:
    "Practical AI implementation for high-performing EAs. We install practical AI systems into your daily workflow — so you can confidently support high-level executives.",
  keywords: [
    "executive assistant AI",
    "AI for EAs",
    "Claude AI implementation",
    "executive assistant tools",
    "AI workflow automation",
    "EA training",
  ],
  openGraph: {
    title: "AI Systems for Executive Assistants",
    description:
      "Practical AI implementation for high-performing EAs. Live implementation program designed for senior EAs and Chiefs of Staff.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Systems for Executive Assistants",
    description:
      "Practical AI implementation for high-performing EAs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FadeInObserver />
      </body>
    </html>
  );
}
