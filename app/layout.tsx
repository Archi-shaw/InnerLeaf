import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innerleaf",
  description: "Journal App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning
    >
    <div className=" bg-[url('/assets/herobg.png')] opacity-80 fixed -z-10 inset-0" />
   <main className="min-h-screen"> {children} </main>
   <footer className="bg-green-300 py-12 bg-opacity-10">
  <div className="">
    <p> Crafted with a calm mind 🌿✨ </p>
  </div>
   </footer>
      </body>
    </html>
  );
}
