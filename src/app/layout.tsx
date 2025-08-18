import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FavoriteProvider } from "@/contexts/favoriteContext";
import { SearchProvider } from "@/contexts/SearchContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cinema",
  description: "Cinema app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

         <SearchProvider>
          <FavoriteProvider>
            {children}
          </FavoriteProvider>
        </SearchProvider> 

        
      </body>
    </html>
  );
}
