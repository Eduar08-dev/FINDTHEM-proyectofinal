"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserLock, FaUser, FaKey, FaEnvelope, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db } from "../../lib/firebase"; // Asegúrate de que la ruta es correcta
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  setDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleToggle = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      console.log("Usuario autenticado:", userCredential.user);
    } catch (error) {
      console.error("Error al autenticar el usuario:", error);
    }
  };

  const handleClickOutside = (event) => {
    if (isMenuOpen && !event.target.closest(".dropdown-menu")) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleCreateAccount = () => {
    // Cierra el modal
    document.getElementById("my_modal_2").close();
    // Redirige a la página de registro
    window.location.href = "/usuario"; // Alternativa a useRouter para redirigir
  };

  return (
    <nav className="navbar relative flex items-center justify-between">
      <div
        className="absolute left-0 top-0 flex h-full w-full flex-row items-center justify-start bg-white"
        style={{ clipPath: "polygon(0 0, 20% 0, 22% 100%, 0 100%)" }}
      >
        <div className="ml-2 flex flex-wrap content-center items-center justify-center">
          <Image
            className="flex"
            src="/LogoFindThem.png"
            alt="Logo de Find Them Navbar"
            width={80}
            height={80}
          />
          <span className="hidden font-sans text-3xl text-Azul-Fuerte sm:block">
            <b>Find</b> Them
          </span>
        </div>
      </div>
      <div
        className="absolute left-0 top-0 h-full w-full bg-Azul-Suave"
        style={{ clipPath: "polygon(20% 0, 20% 0, 22% 100%, 23% 100%)" }}
      ></div>
      <div
        className="absolute left-0 top-0 h-full w-full bg-Azul-Fuerte"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 23% 100%)" }}
      ></div>
      <div className="relative flex w-full items-center justify-between text-white md:justify-center">
        <div className="ml-0 flex items-center justify-center space-x-4 md:ml-48 md:flex md:space-x-8">
          <ul className="menu menu-horizontal hidden space-x-4 px-1 md:flex lg:mx-72">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/noticias">Noticias</Link>
            </li>
            <li>
              <details>
                <summary>Búsqueda</summary>
                <ul className="z-10 rounded-t-none bg-Azul-Fuerte p-1">
                  <li>
                    <Link href="/publica">Solicitar búsqueda</Link>
                  </li>
                  <li>
                    <Link href="/inversa">Búsqueda inversa</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="z-10 flex items-center justify-between space-x-2 md:flex">
          <button
            className="btn bg-Azul-Suave text-white hover:bg-Azul-Mediano"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <FaUserLock className="h-5 w-5" /> Usuario
          </button>
          <button className="p-2 text-white md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={`dropdown-menu absolute right-0 z-10 mt-48 ${isMenuOpen ? "block" : "hidden"} text-white md:hidden`}
      >
        <ul className="menu menu-sm z-[1] w-52 rounded-b-lg bg-Azul-Fuerte p-2 shadow">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link href="/noticias">Noticias</Link>
          </li>
          <li>
            <details className="group">
              <summary className="cursor-pointer">Búsqueda</summary>
              <ul className="absolute mt-2 hidden rounded-b-lg bg-Azul-Base p-2 group-open:block">
                <li>
                  <Link href="/publica">Solicitar búsqueda</Link>
                </li>
                <li>
                  <Link href="/inversa">Búsqueda inversa</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <dialog id="my_modal_2" className="modal backdrop-blur-lg">
        <div className="modal-box flex flex-col items-center justify-center overflow-hidden bg-Azul-Fuerte">
          <h3 className="mb-4 text-center text-lg font-bold text-white">
            Iniciar sesión
          </h3>
          <form
            onSubmit={handleLogin}
            className="flex w-full flex-col items-center"
          >
            <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
              <FaEnvelope />
              <input
                type="email"
                className="grow"
                placeholder="Correo electrónico"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </label>
            <label
              htmlFor="loginPassword"
              className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
            >
              <FaKey />
              <input
                type={showPassword ? "text" : "password"}
                className="grow"
                id="loginPassword"
                placeholder="**********"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <input
                className="flex"
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={handleToggle}
              />
            </label>
            <button
              type="submit"
              className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
            >
              Ingresar
            </button>
            <div className="divider divider-neutral">o</div>
            <button
              type="button"
              className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
              onClick={handleCreateAccount}
            >
              Crear cuenta
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </nav>
  );
};

export default Navbar;
