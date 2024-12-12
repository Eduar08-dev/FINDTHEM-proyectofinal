// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaUserLock, FaUser, FaKey, FaEnvelope, FaBars } from "react-icons/fa6";
// import { FaTimes } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { auth, db } from "../../../firebaseconfig"; // Asegúrate de que la ruta es correcta
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoginView, setIsLoginView] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const [paso, setPaso] = useState(1);
//   const [datosBasicos, setDatosBasicos] = useState({
//     usuario: "",
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [datosAdicionales, setDatosAdicionales] = useState({
//     nombre: '',
//     apellido: '',
//     telefono: '',
//     fechaNacimiento: ''
//   });
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const handleToggle = () => {
//     setShowPassword((prevState) => !prevState);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const toggleView = () => {
//     setIsLoginView((prevState) => !prevState);
//   };
//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState);
//   };

//   const handlePrimerPaso = (e) => {
//     e.preventDefault();
    
//     // Validaciones básicas
//     if (datosBasicos.password !== datosBasicos.confirmPassword) {
//       alert("Las contraseñas no coinciden");
//       return;
//     }

//     if (datosBasicos.password.length < 6) {
//       alert("La contraseña debe tener al menos 6 caracteres");
//       return;
//     }

//     // Avanzar al siguiente paso
//     setPaso(2);
//   };

//   const handleRegistroCompleto = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Crear usuario en Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(
//         auth, 
//         datosBasicos.email, 
//         datosBasicos.password
//       );
      
//       const user = userCredential.user;

//       // Guardar datos adicionales en Firestore
//       await setDoc(doc(db, 'users', user.uid), {
//         ...datosAdicionales,
//         email: datosBasicos.email,
//         createdAt: new Date(),
//         rol: 'usuario' // Rol por defecto
//       });

//       // Redirigir al dashboard o página principal
//       router.push('/');

//     } catch (error) {
//       console.error("Error en el registro:", error);
//       alert(error.message);
//     }
//   };
//   // const handleRegister = async (e) => {
//   //   e.preventDefault();
//   //   if (password !== confirmPassword) {
//   //     alert("Las contraseñas no coinciden.");
//   //     return;
//   //   }

//   //   try {
//   //     const userCredential = await createUserWithEmailAndPassword(
//   //       auth,
//   //       email,
//   //       password,
//   //     );
//   //     const user = userCredential.user;
//   //     console.log("Usuario registrado:", user);

//   //     // Guarda el nombre de usuario en Firestore
//   //     await setDoc(doc(db, "usuarios", user.uid), {
//   //       username,
//   //       email,
//   //     });

//   //     console.log("Usuario guardado en Firestore");

//   //     // Redirige al usuario a completar su perfil
//   //     Router.push(`/complete-profile?userId=${user.uid}`);
//   //   } catch (error) {
//   //     console.error("Error al registrar el usuario:", error);
//   //   }
//   // };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword,
//       );
//       console.log("Usuario autenticado:", userCredential.user);
//     } catch (error) {
//       console.error("Error al autenticar el usuario:", error);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (isMenuOpen && !event.target.closest(".dropdown-menu")) {
//       setIsMenuOpen(false);
//     }
//   };
//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   return (
//     <nav className="navbar relative flex items-center justify-between">
//       <div
//         className="absolute left-0 top-0 flex h-full w-full flex-row items-center justify-start bg-white"
//         style={{ clipPath: "polygon(0 0, 20% 0, 22% 100%, 0 100%)" }}
//       >
//         <div className="ml-2 flex flex-wrap content-center items-center justify-center">
//           <Image
//             className="flex"
//             src="/LogoFindThem.png"
//             alt="Logo de Find Them Navbar"
//             width={80}
//             height={80}
//           />
//           <span className="hidden font-sans text-3xl text-Azul-Fuerte sm:block">
//             <b>Find</b> Them
//           </span>
//         </div>
//       </div>
//       <div
//         className="absolute left-0 top-0 h-full w-full bg-Azul-Suave"
//         style={{ clipPath: "polygon(20% 0, 20% 0, 22% 100%, 23% 100%)" }}
//       ></div>
//       <div
//         className="absolute left-0 top-0 h-full w-full bg-Azul-Fuerte"
//         style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 23% 100%)" }}
//       ></div>
//       <div className="relative flex w-full items-center justify-between text-white md:justify-center">
//         <div className="ml-0 flex items-center justify-center space-x-4 md:ml-48 md:flex md:space-x-8">
//           <ul className="menu menu-horizontal hidden space-x-4 px-1 md:flex lg:mx-72">
//             <li>
//               <Link href="/">Inicio</Link>
//             </li>
//             <li>
//               <Link href="/nosotros">Nosotros</Link>
//             </li>
//             <li>
//               <Link href="/noticias">Noticias</Link>
//             </li>
//             <li>
//               <details>
//                 <summary>Búsqueda</summary>
//                 <ul className="z-10 rounded-t-none bg-Azul-Fuerte p-1">
//                   <li>
//                     <Link href="/publica">Solicitar búsqueda</Link>
//                   </li>
//                   <li>
//                     <Link href="/inversa">Búsqueda inversa</Link>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//           </ul>
//         </div>
//         <div className="z-10 flex items-center justify-between space-x-2 md:flex">
//           <button
//             className="btn bg-Azul-Suave text-white hover:bg-Azul-Mediano"
//             onClick={() => document.getElementById("my_modal_2").showModal()}
//           >
//             <FaUserLock className="h-5 w-5" /> Usuario
//           </button>
//           <button className="p-2 text-white md:hidden" onClick={toggleMenu}>
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//       <div
//         className={`dropdown-menu absolute right-0 z-10 mt-48 ${isMenuOpen ? "block" : "hidden"} text-white md:hidden`}
//       >
//         <ul className="menu menu-sm z-[1] w-52 rounded-b-lg bg-Azul-Fuerte p-2 shadow">
//           <li>
//             <Link href="/">Inicio</Link>
//           </li>
//           <li>
//             <Link href="/nosotros">Nosotros</Link>
//           </li>
//           <li>
//             <Link href="/noticias">Noticias</Link>
//           </li>
//           <li>
//             <details className="group">
//               <summary className="cursor-pointer">Búsqueda</summary>
//               <ul className="absolute mt-2 hidden rounded-b-lg bg-Azul-Base p-2 group-open:block">
//                 <li>
//                   <Link href="/publica">Solicitar búsqueda</Link>
//                 </li>
//                 <li>
//                   <Link href="/inversa">Búsqueda inversa</Link>
//                 </li>
//               </ul>
//             </details>
//           </li>
//         </ul>
//       </div>
//       <dialog id="my_modal_2" className="modal backdrop-blur-lg">
//         <div className="modal-box flex flex-col items-center justify-center overflow-hidden bg-Azul-Fuerte">
//           <AnimatePresence mode="wait">
//             {isLoginView ? (
//               <motion.div
//                 key="login"
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 100 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full"
//               >
//                 <h3 className="mb-4 text-center text-lg font-bold text-white">
//                   Iniciar sesión
//                 </h3>
//                 <form
//                   onSubmit={handleLogin}
//                   className="flex w-full flex-col items-center"
//                 >
//                   <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
//                     <FaEnvelope />
//                     <input
//                       type="email"
//                       className="grow"
//                       placeholder="Correo electrónico"
//                       value={loginEmail}
//                       onChange={(e) => setLoginEmail(e.target.value)}
//                     />
//                   </label>
//                   <label
//                     htmlFor="loginPassword"
//                     className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
//                   >
//                     <FaKey />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="grow"
//                       id="loginPassword"
//                       placeholder="**********"
//                       value={loginPassword}
//                       onChange={(e) => setLoginPassword(e.target.value)}
//                     />
//                     <input
//                       className="flex"
//                       type="checkbox"
//                       id="showPassword"
//                       checked={showPassword}
//                       onChange={handleToggle}
//                     />
//                   </label>
//                   <Link href="/">
//                     <span className="my-2 hover:underline">
//                       ¿Has olvidado la contraseña?
//                     </span>
//                   </Link>
//                   <button
//                     type="submit"
//                     className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
//                   >
//                     Ingresar
//                   </button>
//                   <div className="divider divider-neutral">o</div>
//                   <button
//                     type="button"
//                     className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
//                     onClick={toggleView}
//                   >
//                     Crear cuenta
//                   </button>
//                 </form>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="register"
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 100 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full"
//               >
//                 <h3 className="mb-4 text-center text-lg font-bold text-white">
//                   Crear cuenta
//                 </h3>
//                 <form
//                   onSubmit={paso === 1 ? handlePrimerPaso : handleRegistroCompleto}
//                   className="flex w-full flex-col items-center"
//                 >
//                   <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
//                     <FaUser />
//                     <input
//                       type="text"
//                       className="grow"
//                       placeholder="Usuario"
//                       value={datosBasicos.usuario}
//                       onChange={(e) => setDatosBasicos({ ...datosBasicos, usuario: e.target.value })}
//                     />
//                   </label>
//                   <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
//                     <FaEnvelope />
//                     <input
//                       type="email"
//                       className="grow"
//                       placeholder="Correo electrónico"
//                       value={datosBasicos.email}
//                       onChange={(e) => setDatosBasicos({ ...datosBasicos, email: e.target.value })}
//                     />
//                   </label>
//                   <label
//                     htmlFor="password"
//                     className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
//                   >
//                     <FaKey />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="grow"
//                       id="password"
//                       placeholder="*******"
//                       value={datosBasicos.password}
//                       onChange={(e) => setDatosBasicos({ ...datosBasicos, password: e.target.value })}
//                     />
//                     <input
//                       className="flex"
//                       type="checkbox"
//                       id="showPassword"
//                       checked={showPassword}
//                       onChange={handleToggle}
//                     />
//                   </label>
//                   <label
//                     htmlFor="confirmPassword"
//                     className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
//                   >
//                     <FaKey />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="grow"
//                       id="confirmPassword"
//                       placeholder="Confirmar contraseña"
//                       value={datosBasicos.confirmPassword}
//                       onChange={(e) => setDatosBasicos({ ...datosBasicos, confirmPassword: e.target.value })}
//                     />
//                     <input
//                       className="flex"
//                       type="checkbox"
//                       id="showPassword"
//                       checked={showPassword}
//                       onChange={handleToggle}
//                     />
//                   </label>
//                   <button
//                     type="submit"
//                     className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano" 
//                     onClick={() => {
//                       if (paso === 2) {
//                         router.push('/usuario');
//                       }
//                     }}
//                     >Llenar datos adicionales
//                   </button>
//                   {paso === 2 && (<Link href="/usuario"></Link>)}
//                   <div className="divider divider-neutral">o</div>
//                   <button
//                     type="button"
//                     className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
//                     onClick={toggleView}
//                   >
//                     Iniciar sesión
//                   </button>
//                 </form>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//         <form method="dialog" className="modal-backdrop">
//           <button>close</button>
//         </form>
//       </dialog>
//     </nav>
//   );
// };
// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserLock, FaUser, FaKey, FaEnvelope, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db } from "../../../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [paso, setPaso] = useState(1);

  // Registration state
  const [datosBasicos, setDatosBasicos] = useState({
    usuario: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Additional user details state
  const [datosAdicionales, setDatosAdicionales] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    fechaNacimiento: ""
  });

  // Login state
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: ""
  });

  // Toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Toggle between login and registration views
  const toggleView = () => {
    setIsLoginView((prev) => !prev);
    setPaso(1);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // First step of registration - validate basic details
  const handlePrimerPaso = (e) => {
    e.preventDefault();
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation checks
    if (!datosBasicos.usuario.trim()) {
      alert("Por favor, ingrese un nombre de usuario");
      return;
    }

    if (!emailRegex.test(datosBasicos.email)) {
      alert("Por favor, ingrese un correo electrónico válido");
      return;
    }

    if (datosBasicos.password !== datosBasicos.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (datosBasicos.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Move to next registration step
    setPaso(2);
  };

  // Complete registration
  const handleRegistroCompleto = async (e) => {
    e.preventDefault();
    
    // Validate additional user details
    if (!datosAdicionales.nombre.trim()) {
      alert("Por favor, ingrese su nombre");
      return;
    }

    if (!datosAdicionales.apellido.trim()) {
      alert("Por favor, ingrese su apellido");
      return;
    }

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        datosBasicos.email, 
        datosBasicos.password
      );
      
      const user = userCredential.user;

      // Save additional user details in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        usuario: datosBasicos.usuario,
        ...datosAdicionales,
        email: datosBasicos.email,
        createdAt: new Date(),
        rol: 'usuario'
      });

      // Close modal and redirect to home or dashboard
      document.getElementById("my_modal_2").close();
      router.push('/');

    } catch (error) {
      console.error("Error en el registro:", error);
      alert(error.message || "Hubo un error en el registro");
    }
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginCredentials.email,
        loginCredentials.password
      );
      
      // Close modal and redirect after successful login
      document.getElementById("my_modal_2").close();
      router.push('/');
    } catch (error) {
      console.error("Error al autenticar el usuario:", error);
      alert(error.message || "Error al iniciar sesión");
    }
  };

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".dropdown-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar relative flex items-center justify-between">
      {/* Previously shown logo and navigation sections remain the same */}
      
      {/* Mobile Dropdown Menu */}
      <div
        className={`dropdown-menu absolute right-0 z-10 mt-48 ${isMenuOpen ? "block" : "hidden"} text-white md:hidden`}
      >
        <ul className="menu menu-sm z-[1] w-52 rounded-b-lg bg-Azul-Fuerte p-2 shadow">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/noticias">Noticias</Link></li>
          <li>
            <details className="group">
              <summary className="cursor-pointer">Búsqueda</summary>
              <ul className="absolute mt-2 hidden rounded-b-lg bg-Azul-Base p-2 group-open:block">
                <li><Link href="/publica">Solicitar búsqueda</Link></li>
                <li><Link href="/inversa">Búsqueda inversa</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Authentication Modal */}
      <dialog id="my_modal_2" className="modal backdrop-blur-lg">
        <div className="modal-box flex flex-col items-center justify-center overflow-hidden bg-Azul-Fuerte">
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
                {/* Login form from previous version remains the same */}
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
                  {paso === 1 ? "Crear cuenta" : "Datos adicionales"}
                </h3>
                <form
                  onSubmit={paso === 1 ? handlePrimerPaso : handleRegistroCompleto}
                  className="flex w-full flex-col items-center"
                >
                  {paso === 1 ? (
                    // First step registration form (from previous version)
                    <>
                      {/* Previous first step form fields */}
                    </>
                  ) : (
                    // Second step additional details form
                    <>
                      <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                        <FaUser />
                        <input
                          type="text"
                          className="grow"
                          placeholder="Nombre"
                          value={datosAdicionales.nombre}
                          onChange={(e) => setDatosAdicionales(prev => ({
                            ...prev, 
                            nombre: e.target.value
                          }))}
                          required
                        />
                      </label>
                      <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                        <FaUser />
                        <input
                          type="text"
                          className="grow"
                          placeholder="Apellido"
                          value={datosAdicionales.apellido}
                          onChange={(e) => setDatosAdicionales(prev => ({
                            ...prev, 
                            apellido: e.target.value
                          }))}
                          required
                        />
                      </label>
                      <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                        <FaEnvelope />
                        <input
                          type="tel"
                          className="grow"
                          placeholder="Teléfono"
                          value={datosAdicionales.telefono}
                          onChange={(e) => setDatosAdicionales(prev => ({
                            ...prev, 
                            telefono: e.target.value
                          }))}
                        />
                      </label>
                      <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                        <FaUser />
                        <input
                          type="date"
                          className="grow"
                          placeholder="Fecha de Nacimiento"
                          value={datosAdicionales.fechaNacimiento}
                          onChange={(e) => setDatosAdicionales(prev => ({
                            ...prev, 
                            fechaNacimiento: e.target.value
                          }))}
                        />
                      </label>
                    </>
                  )}
                  <button
                    type="submit"
                    className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
                  >
                    {paso === 1 ? "Siguiente" : "Registrarse"}
                  </button>
                  <div className="divider divider-neutral">o</div>
                  <button
                    type="button"
                    className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
                    onClick={toggleView}
                  >
                    {isLoginView ? "Crear cuenta" : "Iniciar sesión"}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </nav>
  );
};

export default Navbar;

