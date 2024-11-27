"use client";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { Home, Users, Heart, Send, Newspaper, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="flex font-sans">
      <div className="navbar bg-sky-700">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

      {/* Navegación móvil en la parte inferior */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-700 bg-[#1e2633] text-white md:hidden">
        <div className="grid h-16 grid-cols-6">
          <a
            href="#"
            className="flex flex-col items-center justify-center hover:bg-[#2a344d]"
          >
            <Home className="h-5 w-5" />
            <span className="mt-1 text-xs">Home</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center hover:bg-[#2a344d]"
          >
            <Users className="h-5 w-5" />
            <span className="mt-1 text-xs">Nosotros</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center hover:bg-[#2a344d]"
          >
            <Heart className="h-5 w-5" />
            <span className="mt-1 text-xs">Voluntario</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center hover:bg-[#2a344d]"
          >
            <Send className="h-5 w-5" />
            <span className="mt-1 text-xs">Publica</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center hover:bg-[#2a344d]"
          >
            <Newspaper className="h-5 w-5" />
            <span className="mt-1 text-xs">Noticias</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center hover:bg-[#2a344d]"
          >
            <Phone className="h-5 w-5" />
            <span className="mt-1 text-xs">Contacto</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
