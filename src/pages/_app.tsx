// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
