import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expert Web Design and IT Services",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
