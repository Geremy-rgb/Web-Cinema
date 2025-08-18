import type { Metadata } from "next";
import "./globals.css";
import { FavoriteProvider } from "@/contexts/favoriteContext";
import { SearchProvider } from "@/contexts/SearchContext";


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
   
        <SearchProvider>
          <FavoriteProvider>
            {children}
          </FavoriteProvider>
        </SearchProvider>
    
  );
}
