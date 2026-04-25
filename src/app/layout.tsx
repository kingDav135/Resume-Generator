import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResumeFlow - Progressive Resume Builder",
  description: "Build a professional resume step-by-step with live preview, templates, and guided flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background p-4 font-sans antialiased sm:p-6 lg:p-8" suppressHydrationWarning>
        <div className="flex min-h-[calc(100vh-2rem)] flex-col sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
