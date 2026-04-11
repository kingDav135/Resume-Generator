import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/builder/Navbar";

export const metadata: Metadata = {
  title: "Progressive Resume Builder | Professional SaaS Resume",
  description: "Build a modern, professional resume with real-time preview and 10+ templates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 bg-background">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
