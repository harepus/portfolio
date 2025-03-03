import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights as needed
});

export const metadata: Metadata = {
  title: "Sebastian Hareide",
  description: "Mathematics & Bio-Informatics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} antialiased font-serif`}>
        <div className="mx-auto max-w-2xl px-4">{children}</div>
      </body>
    </html>
  );
}
