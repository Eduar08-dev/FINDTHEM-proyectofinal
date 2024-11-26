import {
  FaUsersGear,
  FaMapLocationDot,
  FaPhoneVolume,
  FaEnvelope,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlinePolicy, MdPolicy } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-5 flex justify-evenly bg-Azul-Fuerte py-8 font-sans text-white">
      <div className="flex flex-col flex-nowrap content-start items-start justify-start">
        <h3 className="mb-2 flex items-center text-lg font-bold">
          <FaUsersGear className="mr-2 size-10" /> CONTACTANOS
        </h3>
        <div className="flex flex-col flex-nowrap content-start items-start justify-start">
          <span className="flex items-center justify-start text-sm text-white">
            <FaMapLocationDot className="mr-1 flex h-4 w-4 text-white" />
            <span className="ml-2">Barranquilla, Colombia</span>
          </span>
          <span className="my-1 flex items-center text-sm text-white">
            <FaPhoneVolume className="mr-1 flex h-4 w-4 text-white" />
            <span className="ml-2">+57 3001234567</span>
          </span>
          <span className="flex items-center text-sm text-white">
            <FaEnvelope className="mr-1 flex h-4 w-4 text-white" />
            <span className="ml-2">support@findthem.com</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-nowrap content-start items-start justify-start">
        <h3 className="mb-2 flex items-center text-lg font-bold">
          <IoShareSocialSharp className="mr-0 size-10" />
          SIGUENOS
        </h3>
        <div className="flex flex-col flex-nowrap content-start items-start justify-start">
          <a
            href=""
            className="flex items-center justify-start text-sm text-white hover:text-Azul-Mediano"
          >
            <FaFacebookF className="mr-1 flex h-4 w-4 text-white hover:text-Azul-Mediano" />
            Facebook
          </a>
          <a
            href=""
            className="flex items-center justify-start text-sm text-white hover:text-Azul-Mediano"
          >
            <FaInstagram className="mr-1 flex h-4 w-4 text-white hover:text-Azul-Mediano" />
            Instagram
          </a>
          <a
            href=""
            className="flex items-center justify-start text-sm text-white hover:text-Azul-Mediano"
          >
            <FaXTwitter className="mr-1 flex h-4 w-4 text-white hover:text-Azul-Mediano" />
            Twitter
          </a>
        </div>
      </div>

      <div className="flex flex-col flex-nowrap content-start items-start justify-start">
        <h3 className="mb-2 flex items-center text-lg font-bold">
          <MdOutlinePolicy className="mr-1 size-10" />
          POLITICAS
        </h3>
        <div className="flex flex-col flex-nowrap content-start items-start justify-start">
          <a
            href=""
            className="flex items-center justify-start text-sm text-white hover:text-Azul-Mediano"
          >
            <MdPolicy className="mr-1 flex h-4 w-4 text-white hover:text-Azul-Mediano" />
            Terminos y Condiciones
          </a>
          <a
            href=""
            className="flex items-center justify-start text-sm text-white hover:text-Azul-Mediano"
          >
            <MdPolicy className="mr-1 flex h-4 w-4 text-white hover:text-Azul-Mediano" />
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
