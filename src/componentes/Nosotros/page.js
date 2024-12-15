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
      <div className="flex h-12 w-full flex-wrap items-center justify-center space-x-2 bg-Azul-Suave px-4 md:h-8 lg:h-8">
        <div className="flex items-center space-x-1">
          <FaMapLocationDot className="h-4 w-4 text-white" />
          <a
            href="https://www.google.com/maps?q=10.9634,-74.7966"
            target="_blank"
            className="text-sm text-white"
          >
            Barranquilla, Colombia
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <FaPhoneVolume className="h-4 w-4 text-white" />
          <a href="tel:+573001234567" className="text-sm text-white">
            +57 3001234567
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <FaEnvelope className="h-4 w-4 text-white" />
          <a href="mailto:support@findthem.com" className="text-sm text-white">
            support@findthem.com
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-sm text-white">Síguenos en: </span>
          <a
            href="https://www.facebook.com"
            className="inline-flex items-center space-x-1"
          >
            <FaFacebookF className="h-4 w-4 text-white hover:text-black" />
          </a>
          <a
            href="https://www.twitter.com"
            className="inline-flex items-center space-x-1"
          >
            <FaXTwitter className="h-4 w-4 text-white hover:text-black" />
          </a>
          <a
            href="https://www.instagram.com"
            className="inline-flex items-center space-x-1"
          >
            <FaInstagram className="h-4 w-4 text-white hover:text-black" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
