// components/Navbar.js
import { FaPhoneVolume } from "react-icons/fa";
import Image from "next/image";

// components/Navbar.js
const PNavbar = () => {
  return (
    <nav className="navbar relative flex h-16 items-center justify-between">
      <div
        className="absolute left-0 top-0 flex h-full w-full flex-row items-center justify-start bg-white"
        style={{ clipPath: "polygon(0 0, 20% 0, 22% 100%, 0 100%)" }}
      >
        <Image
          className="flex"
          src="/LogoFindThem.png"
          alt="Logo de Find Them Navbar"
          width={80}
          height={80}
        />
        <span className="flex font-sans text-3xl text-Azul-Fuerte">
          <b>Find</b> Them
        </span>
      </div>
      <div
        className="absolute left-0 top-0 h-full w-full bg-Azul-Suave"
        style={{ clipPath: "polygon(20% 0, 20% 0, 22% 100%, 23% 100%)" }}
      ></div>
      <div
        className="absolute left-0 top-0 h-full w-full bg-Azul-Fuerte"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 23% 100%)" }}
      ></div>
      <div className="relative flex w-full items-center justify-center text-white">
        <div className="flex items-center justify-center space-x-4">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <a>Voluntario</a>
            </li>
            <li>
              <a>Publica</a>
            </li>
            <li>
              <a>Noticias</a>
            </li>
            <li>
              <details>
                <summary>Contacto</summary>
                <ul className="rounded-t-none bg-base-100 p-2">
                  <li>
                    <a>Policia</a>
                  </li>
                  <li>
                    <a>Bomberos</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PNavbar;
