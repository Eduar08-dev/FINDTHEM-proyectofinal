// src/components/Card.js
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Card({ icon, title, description, link }) {
  return (
    <div className="card flex w-80 content-center items-center justify-center bg-white p-5 text-Azul-Fuerte shadow-custom-shadow">
      <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-dashed border-Azul-Fuerte">
        <div className="flex items-center justify-center p-6 text-Azul-Suave">
          {icon}
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link href={link}>
            <button className="btn btn-primary rounded-full bg-Azul-Suave text-white shadow-custom-shadow hover:bg-Azul-Mediano">
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
