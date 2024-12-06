import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/sections/Header";
import { NavProvider } from "@/contexts/NavContext";
import Landing from "@/components/sections/Landing";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Your Portfolio",
  description: "Personal portfolio showcasing projects and experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <NavProvider>
          <Header />
        </NavProvider>
        <Landing />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
