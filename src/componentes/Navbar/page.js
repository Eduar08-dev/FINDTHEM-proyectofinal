"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserLock, FaUser, FaKey, FaEnvelope } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const NavbarPrueba = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoginView, setIsLoginView] = useState(true);

  const handleToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleView = () => {
    setIsLoginView((prevState) => !prevState);
  };

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
        <div className="ml-48 flex items-center justify-center space-x-4">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <a>Noticias</a>
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
      </div>
      <div className="z-10 flex content-end items-end justify-end">
        <button
          className="btn bg-Azul-Suave text-white hover:bg-Azul-Mediano"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <FaUserLock className="h-5 w-5" />
          Usuario
        </button>
        <dialog id="my_modal_2" className="modal backdrop-blur-lg">
          <div className="modal-box flex flex-col flex-nowrap content-center items-center justify-center overflow-hidden bg-Azul-Fuerte">
            <AnimatePresence mode="wait">
              {isLoginView ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <h3 className="mb-4 text-center text-lg font-bold text-white">
                    Iniciar sesión
                  </h3>
                  <div className="flex w-full flex-col items-center">
                    <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                      <FaUser />
                      <input
                        type="text"
                        className="grow"
                        placeholder="Usuario"
                      />
                    </label>
                    <label
                      htmlFor="password"
                      className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
                    >
                      <FaKey />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="password grow"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="**********"
                      />
                      <input
                        className="flex"
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={handleToggle}
                      />
                    </label>
                    <Link href="/">
                      <span className="my-2 hover:underline">
                        ¿Has olvidado la contraseña?
                      </span>
                    </Link>
                    <button className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano">
                      Ingresar
                    </button>
                    <div className="divider divider-neutral">o</div>
                    <button
                      className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
                      onClick={toggleView}
                    >
                      Crear cuenta
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <h3 className="mb-4 text-center text-lg font-bold text-white">
                    Crear cuenta
                  </h3>
                  <div className="flex w-full flex-col items-center">
                    <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                      <FaUser />
                      <input
                        type="text"
                        className="grow"
                        placeholder="Usuario"
                      />
                    </label>
                    <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                      <FaEnvelope />
                      <input
                        type="email"
                        className="grow"
                        placeholder="Correo electrónico"
                      />
                    </label>
                    <label
                      htmlFor="password"
                      className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
                    >
                      <FaKey />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="password grow"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="*******"
                      />
                      <input
                        className="flex"
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={handleToggle}
                      />
                    </label>
                    <label
                      htmlFor="confirmPassword"
                      className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
                    >
                      <FaKey />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="password grow"
                        id="confirmPassword"
                        placeholder="Confirmar contraseña"
                      />
                      <input
                        className="flex"
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={handleToggle}
                      />
                    </label>
                    <button className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano">
                      Registrar
                    </button>
                    <div className="divider divider-neutral">o</div>
                    <button
                      className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
                      onClick={toggleView}
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </nav>
  );
};

export default NavbarPrueba;
