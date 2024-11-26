// components/LatestNews.js
import Image from 'next/image';

const newsData = [
  {
    id: 1,
    title: "Nueva actualización en la plataforma",
    description: "Conoce las nuevas funcionalidades y mejoras en la última actualización de nuestra plataforma.",
    image: "/news1.jpg",
    link: "/news/1",
  },
  {
    id: 2,
    title: "Evento de Fin de Año",
    description: "No te pierdas el evento especial de fin de año con premios y sorpresas para todos.",
    image: "/news2.jpg",
    link: "/news/2",
  },
  {
    id: 3,
    title: "Lanzamiento de la nueva app",
    description: "Explora todas las novedades de nuestra nueva app móvil disponible para iOS y Android.",
    image: "/news3.jpg",
    link: "/news/3",
  },
];

const UltimasNoticias = () => {
  return (
    <section className="bg-gray-300 py-10 my-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Últimas Noticias</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={news.image}
                alt={news.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{news.title}</h3>
                <p className="text-gray-600 mt-2">{news.description}</p>
                <a
                  href={news.link}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Leer más &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UltimasNoticias;