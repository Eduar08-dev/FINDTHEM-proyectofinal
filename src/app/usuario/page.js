import Navbar from "@/componentes/Navbar/page";
import Nosotros from "@/componentes/Nosotros/page";
import InfoUsuario from "@/componentes/Usuario/page";
import Footer from "@/componentes/Footer";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <InfoUsuario />
      </div>
    </>
  );
}
