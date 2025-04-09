import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LLMs Name",
  description: "LLMs Name - 大语言模型发展时间线记录",
  keywords: "LLM, AI, 大语言模型, ChatGPT, Claude, Gemini, Llama, DeepSeek, Grok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-auto flex flex-col bg-gray-50`}
      >
        <Header />
        <main className="container mx-auto py-6 px-4 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
