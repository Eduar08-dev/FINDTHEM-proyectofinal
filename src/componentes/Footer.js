import React from "react";
import {
  FaUsers,
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
    <footer className="mt-5 flex flex-row flex-wrap content-center items-center justify-evenly gap-[20px] bg-Azul-Fuerte py-8 font-sans text-white md:content-center md:items-center md:justify-evenly">
      <div className="flex flex-col flex-nowrap content-center items-center justify-center">
        <h3 className="mb-2 flex items-center text-lg font-bold">
          <FaUsers className="mr-1 size-10" /> CONTACTANOS
        </h3>
        <div className="flex flex-col flex-nowrap content-center items-center justify-center space-y-2">
          <span className="flex items-center text-sm">
            <FaMapLocationDot className="mr-1 h-4 w-4" />
            <span>Barranquilla, Colombia</span>
          </span>
          <span className="flex items-center text-sm">
            <FaPhoneVolume className="mr-1 h-4 w-4" />
            <span>+57 3001234567</span>
          </span>
          <span className="flex items-center text-sm">
            <FaEnvelope className="mr-1 h-4 w-4" />
            <span>support@findthem.com</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-nowrap content-center items-center justify-center">
        <h3 className="mb-2 flex items-center text-lg font-bold">
          <IoShareSocialSharp className="mr-1 size-10" /> SIGUENOS
        </h3>
        <div className="flex flex-col flex-nowrap content-center items-center justify-center space-y-2">
          <a
            href=""
            className="flex items-center text-sm hover:text-Azul-Mediano"
          >
            <FaFacebookF className="mr-1 h-4 w-4" /> Facebook
          </a>
          <a
            href=""
            className="flex items-center text-sm hover:text-Azul-Mediano"
          >
            <FaInstagram className="mr-1 h-4 w-4" /> Instagram
          </a>
          <a
            href=""
            className="flex items-center text-sm hover:text-Azul-Mediano"
          >
            <FaXTwitter className="mr-1 h-4 w-4" /> Twitter
          </a>
        </div>
      </div>

      <div className="flex flex-col flex-nowrap content-center items-center justify-center">
        <h3 className="mb-2 flex items-center text-lg font-bold">
          <MdOutlinePolicy className="mr-1 size-10" /> POLITICAS
        </h3>
        <div className="flex flex-col flex-nowrap content-center items-center justify-center space-y-2">
          <a
            href=""
            className="flex items-center text-sm hover:text-Azul-Mediano"
          >
            <MdPolicy className="mr-1 h-4 w-4" /> Terminos y Condiciones
          </a>
          <a
            href=""
            className="flex items-center text-sm hover:text-Azul-Mediano"
          >
            <MdPolicy className="mr-1 h-4 w-4" /> Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
