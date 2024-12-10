import Navbar from "@/componentes/Navbar/page";
import Nosotros from "@/componentes/Nosotros/page";
import FormInversa from "@/componentes/Inversa/page";
import Footer from "@/componentes/Footer";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <FormInversa />
        <Footer />
      </div>
    </>
  );
}
