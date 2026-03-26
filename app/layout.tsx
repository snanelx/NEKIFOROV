import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Никифоров | Портфолио разработчика",
  description:
    "Персональное портфолио разработчика: проекты, навыки, опыт и контакты для работодателей и заказчиков.",
  keywords: [
    "портфолио разработчика",
    "Next.js",
    "frontend developer",
    "JavaScript",
    "веб-разработчик"
  ],
  openGraph: {
    title: "Никифоров | Портфолио разработчика",
    description:
      "Онлайн-портфолио с проектами, стеком технологий и контактной информацией.",
    type: "website",
    locale: "ru_RU"
  },
  twitter: {
    card: "summary_large_image",
    title: "Никифоров | Портфолио разработчика",
    description:
      "Портфолио разработчика с акцентом на интерфейсы, адаптивность и реальные проекты."
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
    <html lang="ru" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
