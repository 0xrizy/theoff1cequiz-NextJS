import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "The Office Quiz",
  description: "Using openAI API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-700">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
