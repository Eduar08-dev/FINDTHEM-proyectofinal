"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../lib/firebase"; // Aquí debes importar tu configuración de Firebase

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Componente que proporciona el contexto a toda la app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Esta función se ejecuta cuando cambia el estado de la autenticación
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe(); // Limpia el listener cuando el componente se desmonte
  }, []);

  // Proveemos el contexto a todos los componentes hijos
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

// Hook para acceder al estado de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};
