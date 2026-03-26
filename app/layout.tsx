import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Никифоров | Портфолио разработчика",
  description:
    "Персональное портфолио разработчика: навыки, опыт, проекты и контакты в современном адаптивном формате.",
  keywords: [
    "портфолио разработчика",
    "Next.js",
    "frontend developer",
    "TypeScript",
    "веб-разработчик"
  ],
  openGraph: {
    title: "Никифоров | Портфолио разработчика",
    description:
      "Интерактивное онлайн-портфолио с проектами, стеком технологий и контактами.",
    type: "website",
    locale: "ru_RU"
  },
  twitter: {
    card: "summary_large_image",
    title: "Никифоров | Портфолио разработчика",
    description:
      "Портфолио разработчика на Next.js с акцентом на качество интерфейсов и инженерную аккуратность."
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
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
