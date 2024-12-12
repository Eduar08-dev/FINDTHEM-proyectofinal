import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/componentes/Navbar/page";
import Footer from "@/componentes/Footer";
import Nosotros from "@/componentes/Nosotros/page";
import { AuthProvider } from "@/context/AuthContext";

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
  title: "Find Them",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {/* Agregar el favicon en formato PNG */}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <AuthProvider>
          <header>
            <Nosotros />

            <Navbar />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
