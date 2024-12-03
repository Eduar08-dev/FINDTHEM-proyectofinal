// pages/index.js
"use client";

import Card from "./Cards/page";
import CardsDatos from "./CardsDatos/page";
import { FaUserPlus, FaUserMinus, FaRegNewspaper } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { TweenMax, Circ } from "gsap";

const Modulos = () => {
  const [cifra1, setCifra1] = useState(999999);
  const [cifra2, setCifra2] = useState(999999);
  const modulosRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(modulosRef.current); //todo Deja de observar una vez que es visible para llamadas innecesarias
        }
      },
      { threshold: 0.3 }, //todo Porcentaje para dar comienzo a la animación
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
      const contador1 = { valor: 999999 };
      const contador2 = { valor: 999999 };

      TweenMax.to(contador1, 3, {
        valor: 500000,
        onUpdate: function () {
          setCifra1(Math.ceil(contador1.valor));
        },
        ease: Circ.easeOut,
      });

      TweenMax.to(contador2, 3, {
        valor: 500000,
        onUpdate: function () {
          setCifra2(Math.ceil(contador2.valor));
        },
        ease: Circ.easeOut,
      });
    }
  }, [isVisible]);

  return (
    <div className="flex flex-row flex-wrap content-between items-center justify-around gap-0 bg-white p-5">
      <div className="grid gap-9 md:grid-cols-3">
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
          link="/inicio"
        />
      </div>
      <div
        ref={modulosRef}
        className="flex flex-row flex-wrap content-between items-center justify-around gap-0 bg-white p-5"
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
