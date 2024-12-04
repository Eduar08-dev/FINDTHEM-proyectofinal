// import Image from "next/image";
// import Link from "next/link";


// const Navbar = () => {
//   return (
//     <nav className="navbar relative flex h-16 items-center justify-between">
//       <div
//         className="absolute left-0 top-0 flex h-full w-full flex-row items-center justify-start bg-white"
//         style={{ clipPath: "polygon(0 0, 20% 0, 22% 100%, 0 100%)" }}
//       >
//         <Image
//           className="flex"
//           src="/LogoFindThem.png"
//           alt="Logo de Find Them Navbar"
//           width={80}
//           height={80}
//         />
//         <span className="flex font-sans text-3xl text-Azul-Fuerte">
//           <b>Find</b> Them
//         </span>
//       </div>
//       <div
//         className="absolute left-0 top-0 h-full w-full bg-Azul-Suave"
//         style={{ clipPath: "polygon(20% 0, 20% 0, 22% 100%, 23% 100%)" }}
//       ></div>
//       <div
//         className="absolute left-0 top-0 h-full w-full bg-Azul-Fuerte"
//         style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 23% 100%)" }}
//       ></div>
//       <div className="relative flex w-full items-center justify-center">
//         <div className="flex items-center justify-center space-x-4 text-white">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <Link href="/">Inicio</Link>
//             </li>
//             <li>
//             <Link href="/nosotros">Nosotros</Link>
//             </li>
//             <li>
//               <a>Voluntario</a>
//             </li>
//             <li>
//               <Link href="/publica">Publica</Link>
//             </li>
//             <li>
//               <a>Noticias</a>
//             </li>
//             <li>
//               <details>
//                 <summary>Contacto</summary>
//                 <ul className="z-10 rounded-t-none bg-Azul-Fuerte p-1">
//                   <li>
//                     <a>Policia</a>
//                   </li>
//                   <li>
//                     <a>Bomberos</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar relative flex h-16 items-center text-white justify-between">
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
        <span className="hidden md:flex font-sans text-3xl text-Azul-Fuerte">
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
      <div className="relative flex w-full items-center justify-end md:justify-center">
        {/* Hamburger menu button */}
        <button
          className="z-20 mr-4 text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation menu */}
        <div
          className={`absolute right-0 top-16 z-10 w-full transform bg-Azul-Fuerte transition-transform duration-300 ease-in-out md:relative md:top-0 md:w-auto md:transform-none md:transition-none ${
            isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="menu menu-vertical px-1 md:menu-horizontal md:space-x-4">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <a>Voluntario</a>
            </li>
            <li>
              <Link href="/publica">Publica</Link>
            </li>
            <li>
              <a>Noticias</a>
            </li>
            <li>
              <details>
                <summary>Contacto</summary>
                <ul className="z-10 rounded-t-none bg-Azul-Fuerte p-1">
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

export default Navbar;


