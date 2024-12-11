import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/sections/Header";
import { NavProvider } from "@/contexts/NavContext";
import Landing from "@/components/sections/Landing";
import Projects from "@/components/sections/Projects";
import Articles from "@/components/sections/Articles";
import { Press_Start_2P } from "next/font/google";
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

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export const metadata = {
  title: "Your Portfolio",
  description: "Personal portfolio showcasing projects and experiences",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable}`}
    >
      <body className="min-h-screen bg-black text-white antialiased">
        <NavProvider>
          <Header />
        </NavProvider>
        <Landing />
        <Projects />
        <Articles />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
