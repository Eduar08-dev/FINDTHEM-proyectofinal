import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/componentes/Navbar/page";
import Footer from "@/componentes/Footer";
import Nosotros from "@/componentes/Nosotros/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FIND-THEM",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <header>
          <Nosotros/>
          <Navbar/>
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}