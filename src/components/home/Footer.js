import { LuContact2 } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";
import { MdOutlinePolicy } from "react-icons/md";


const Footer = () => {
    return (
        <footer className=" flex justify-evenly bg-slate-800 text-white py-8 font-sans">
    <div className="flex flex-col items-center">
    <h3 className="font-bold text-lg mb-2 flex items-center">
    <LuContact2 className="mr-2 size-10" /> CONTACTANOS
    </h3>
      <p>Direccion <br/> Ciudad, departamento</p>
      <p>correo electronico</p>
    </div>

    <div className="flex flex-col items-center">
      <h3 className="font-bold text-lg mb-2 flex items-center">
      <SlSocialFacebook className="mr-0 size-10"/>SIGUENOS EN REDES</h3>
      <a href="" className="text-white hover:text-emerald-400 transition-colors">Facebook</a>
      <a href="" className="text-white hover:text-emerald-400 transition-colors">Instagram</a>
      <a href="" className="text-white hover:text-emerald-400 transition-colors">Twitter</a>
    </div>

    <div className="flex flex-col">
      <h3 className="font-bold text-lg mb-2 flex items-center">
      <MdOutlinePolicy className="mr-1 size-10" />POLITICAS</h3>
      <a href="" className="text-white hover:text-emerald-400 transition-colors">Terminos y Condiciones</a>
      <a href="" className="text-white hover:text-emerald-400 transition-colors">Política de privacidad</a>
    </div>
</footer>

 );
}

export default Footer;