"use client";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { Home, Users, Heart, Send, Newspaper, Phone } from 'lucide-react'

const Header = () => {
    return (
      
      <header className="flex bg-slate-800 font-sans py-4">
        <div className="flex justify-start p-2 m-1 ml-5">
        <div className="w-6 h-6"></div>
        <h1 className="flex items-center text-white font-roboto text-2xl">
        <PiMagnifyingGlassDuotone className="flex justify-start items-center mr-1 size-10"/>FIND THEM</h1>
       </div>
        <div className="flex items-center justify-center w-full mr-20">
          {/* Navegación */}
          <nav className="flex justify-center items-center md:items-center space-x-8 m-0">
            <a href="/" className="text-white hover:text-emerald-400 transition-colors">
              Home
            </a>
            <a href="/quienes-somos" className="text-white hover:text-emerald-400 transition-colors">
              ¿Quienes somos?
            </a>
            <a href="/voluntario" className="text-white hover:text-emerald-400 transition-colors">
              Vuelvete voluntario
            </a>
            <a href="/publica" className="text-white hover:text-emerald-400 transition-colors">
              Publica aquí
            </a>
            <a href="/noticias" className="text-white hover:text-emerald-400 transition-colors">
              Noticias
            </a>
            <a href="/contacto" className="text-white hover:text-emerald-400 transition-colors">
              Contacto
            </a>
          </nav>
        </div>

        {/* Navegación móvil en la parte inferior */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1e2633] text-white border-t border-gray-700">
        <div className="grid grid-cols-6 h-16">
          <a href="#" className="flex flex-col items-center justify-center hover:bg-[#2a344d]">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center hover:bg-[#2a344d]">
            <Users className="h-5 w-5" />
            <span className="text-xs mt-1">Nosotros</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center hover:bg-[#2a344d]">
            <Heart className="h-5 w-5" />
            <span className="text-xs mt-1">Voluntario</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center hover:bg-[#2a344d]">
            <Send className="h-5 w-5" />
            <span className="text-xs mt-1">Publica</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center hover:bg-[#2a344d]">
            <Newspaper className="h-5 w-5" />
            <span className="text-xs mt-1">Noticias</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center hover:bg-[#2a344d]">
            <Phone className="h-5 w-5" />
            <span className="text-xs mt-1">Contacto</span>
          </a>
        </div>
      </nav>
      </header>
      
    );
  };
  
  export default Header;