import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nekiforov | Developer Portfolio",
  description:
    "Personal developer portfolio with projects, skills, experience and contact information.",
  keywords: [
    "developer portfolio",
    "Next.js",
    "frontend developer",
    "TypeScript",
    "web developer"
  ],
  openGraph: {
    title: "Nekiforov | Developer Portfolio",
    description:
      "Interactive online portfolio with projects, technology stack and contact information.",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nekiforov | Developer Portfolio",
    description:
      "Developer portfolio built with Next.js and focused on polished interfaces and clean implementation."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
