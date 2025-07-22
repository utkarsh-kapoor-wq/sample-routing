import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Sample Routing - Next.js App Router",
  description: "Next.js routing example with subjects using App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen bg-gray-50 font-sans"
      >
        <Navbar />
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
