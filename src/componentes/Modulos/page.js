
"use client";

import Card from "./Cards/page";
import CardsDatos from "./CardsDatos/page";
import { FaUserPlus, FaUserMinus, FaRegNewspaper } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { gsap, Circ } from "gsap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Modulos = () => {
  const [cifra1, setCifra1] = useState(null);
  const [cifra2, setCifra2] = useState(null);
  const [totalPublicaciones, setTotalPublicaciones] = useState(0);
  const [totalEncontradas, setTotalEncontradas] = useState(0);
  const modulosRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const obtenerTotalPublicaciones = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "personas_desaparecidas"));
      setTotalPublicaciones(querySnapshot.size);
      const querySnapshotEncontradas = await getDocs(collection(db, "personas_encontradas"));
      setTotalEncontradas(querySnapshotEncontradas.size); // 
    } catch (error) {
      console.error("Error al obtener publicaciones:", error);
    }
  };

  useEffect(() => {
    obtenerTotalPublicaciones();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(modulosRef.current); 
        }
      },
      { threshold: 0.3 },
    );

    if (modulosRef.current) {
      observer.observe(modulosRef.current);
    }

    return () => {
      if (modulosRef.current) {
        observer.unobserve(modulosRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const contador1 = { valor: 0 };
      const contador2 = { valor: 0 };

      gsap.to(contador1, {
        duration: 3,
        valor: totalPublicaciones, 
        onUpdate: function () {
          setCifra1(Math.ceil(contador1.valor));
        },
        ease: Circ.easeOut,
      });
      gsap.to(contador2, {
        duration: 3,
        valor: totalEncontradas,
        onUpdate: function () {
          setCifra2(Math.ceil(contador2.valor));
        },
        ease: Circ.easeOut,
      });
    }
  }, [isVisible, totalPublicaciones, totalEncontradas]);


  return (
    <div className="flex flex-col flex-wrap items-center justify-around gap-5 bg-white p-5 md:flex-row md:content-between md:gap-0">
      <div className="grid gap-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-center">
        <Card
          icon={<FaUserPlus className="h-16 w-16" />}
          title="Solicitud de búsqueda"
          description="¿Quieres reportar a una persona desaparecida debido a un posible rapto?"
          link="/publica"
        />
        <Card
          icon={<FaUserMinus className="h-16 w-16" />}
          title="Búsqueda inversa"
          description="Ayúdanos para que las familias del país que buscan a sus seres queridos desaparecidos puedan conocer su destino y ubicación."
          link="/inversa"
        />
        <Card
          icon={<FaRegNewspaper className="h-16 w-16" />}
          title="Personas perdidas"
          description="Mira el listado completo de las personas desaparecidas aquí."
          link="/noticias"
          className="lg:col-span-3 md:bg-Azul-Fuerte lg:justify-self-center"
        />
      </div>
      <div
        ref={modulosRef}
        className="flex flex-col flex-wrap items-center justify-around gap-5 bg-white pt-5 md:flex-row md:content-between md:gap-0"
      >
        <div className="mt-5 grid gap-9 md:grid-cols-2">
          <CardsDatos
            cifra={cifra1}
            informacion="Esta es la cantidad de personas reportadas como desaparecidas, un hecho que ha dejado a muchas familias en la incertidumbre sobre el paradero de sus seres queridos."
          />
          <CardsDatos
            cifra={cifra2}
            informacion="Esta es la cantidad de personas que con su ayuda hemos encontrado, colaborando activamente para ayudar a encontrar a sus seres queridos. Gracias a su esfuerzo y dedicación."
          />
        </div>
      </div>
    </div>
  );
};

export default Modulos;
