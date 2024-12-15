import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/sections/Header";
import { NavProvider } from "@/contexts/NavContext";
import Landing from "@/components/sections/Landing";
import Projects from "@/components/sections/Projects";
import Articles from "@/components/sections/Articles";
import CodingProfile from "@/components/sections/CodingProfile";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import { Press_Start_2P, Caveat } from "next/font/google";
import StructuredData from "@/components/StructuredData";
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

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://jorjishasan.com"),
  title: {
    default: "Jorjis Hasan | Full-Stack MERN Developer & UI/UX Designer",
    template: "%s | Jorjis Hasan",
  },
  description:
    "Expert MERN Stack Developer specializing in React, Next.js, Redux, and UI/UX Design. Creating scalable web applications and stunning user interfaces. Based in Bangladesh, working globally.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "UI Engineer",
    "UX Designer",
    "Frontend Developer",
    "React Redux Developer",
    "Jorjis Hasan",
    "jorjishasan",
    "Landing Page Developer",
    "JavaScript Expert",
    "Bangladesh Developer",
  ],
  creator: "Jorjis Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jorjishasan.com",
    title: "Jorjis Hasan | Full-Stack MERN Developer & UI/UX Designer",
    description:
      "Expert MERN Stack Developer specializing in React, Next.js, Redux, and UI/UX Design. Creating scalable web applications and stunning user interfaces.",
    siteName: "Jorjis Hasan Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create this image
        width: 1200,
        height: 630,
        alt: "Jorjis Hasan - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorjis Hasan | Full-Stack MERN Developer & UI/UX Designer",
    description:
      "Expert MERN Stack Developer specializing in React, Next.js, Redux, and UI/UX Design.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} ${caveat.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <NavProvider>
          <Header />
        </NavProvider>
        <main>
          <Landing />
          <CodingProfile />
          <Projects />
          <Skills />
          <Articles />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
