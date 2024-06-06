import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Toaster } from "sonner";
const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tryferu",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
      <Toaster />
    </html>
  );
}
