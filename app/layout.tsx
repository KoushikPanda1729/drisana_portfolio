import type { Metadata } from "next";
import { Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { personSchema, websiteSchema } from './schema';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

const kaushanScript = Kaushan_Script({
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-signature',
});

export const metadata: Metadata = {
  title: "Drisana Dasgupta - UI/UX Designer | Portfolio",
  description: "Creative UI/UX Designer specializing in user-centered digital experiences. Expert in Figma, Adobe XD, wireframing, and prototyping. Based in Jalpaiguri, West Bengal.",
  keywords: ["UI/UX Designer", "Drisana Dasgupta", "Portfolio", "User Experience", "User Interface", "Figma", "Adobe XD", "Web Design", "Mobile Design", "Jalpaiguri"],
  authors: [{ name: "Drisana Dasgupta" }],
  creator: "Drisana Dasgupta",
  openGraph: {
    title: "Drisana Dasgupta - UI/UX Designer",
    description: "Creative UI/UX Designer passionate about crafting intuitive, user-centered digital experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drisana Dasgupta - UI/UX Designer",
    description: "Creative UI/UX Designer passionate about crafting intuitive, user-centered digital experiences",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} ${kaushanScript.variable}`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#6366f1',
                fontFamily: inter.style.fontFamily,
                borderRadius: 8,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
