// src/components/Card.js

export default function CardsDatos({ cifra, informacion }) {
  return (
    <div className="card flex w-80 content-center items-center justify-center bg-white p-5 text-Azul-Fuerte shadow-custom-shadow">
      <div className="mt-4 flex h-36 w-36 items-center justify-center rounded-full border-4 border-dashed border-Azul-Fuerte">
        <div className="cifra flex items-center justify-center p-6 text-4xl font-bold text-Azul-Suave">
          {cifra}
        </div>
      </div>
      <div className="card-body items-center text-center">
        <p>{informacion}</p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
}
