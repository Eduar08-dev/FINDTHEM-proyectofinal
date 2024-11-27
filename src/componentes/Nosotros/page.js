import {
  FaPhoneVolume,
  FaEnvelope,
  FaMapLocationDot,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Nosotros = () => {
  return (
    <>
      <div className="bg-Azul-Suave flex h-8 max-w-full flex-row items-center justify-center">
        <FaMapLocationDot className="mr-1 h-4 w-4 text-white" />
        <span className="text-sm text-white">Barranquilla, Colombia</span>
        <FaPhoneVolume className="ml-5 mr-1 h-4 w-4 text-white" />
        <span className="text-sm text-white">+57 3001234567</span>
        <FaEnvelope className="ml-5 mr-1 h-4 w-4 text-white" />
        <span className="text-sm text-white">support@findthem.com</span>
        <span className="ml-5 text-sm text-white">Síguenos en: </span>
        <a href="">
          <FaFacebookF className="ml-1 mr-3 h-4 w-4 text-white hover:text-black" />
        </a>
        <a href="">
          <FaXTwitter className="mr-3 h-4 w-4 text-white hover:text-black" />
        </a>
        <a href="">
          <FaInstagram className="mr-3 h-4 w-4 text-white hover:text-black" />
        </a>
      </div>
    </>
  );
};

export default Nosotros;
