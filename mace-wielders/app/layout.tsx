import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/sideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IOT Project",
  description: "IOT Project based on the tensorflow.js and runs via Respberry PI 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <SideNav />
          {children}
        </main>
      </body>
    </html>
  );
}
