import Navbar from "@/componentes/Navbar/page";
import Nosotros from "@/componentes/Nosotros/page";
import Post from "@/componentes/Pruebas/page";
import Footer from "@/componentes/Footer";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Nosotros />
        <Navbar />
        <Post />
        <Footer />
      </div>
    </>
  );
}
