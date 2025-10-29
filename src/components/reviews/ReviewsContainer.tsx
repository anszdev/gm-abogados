import { useRef } from "react";
import { getInitialLettersName } from "@/utils";
import { Review } from "./Review";
import { ReviewExperence } from "./ReviewExperence";
import "./Reviews.css";

const REVIEWS = [
  {
    id: 1,
    name: "Raúl P. Ramírez",
    location: "Iztapalapa, CDMX",
    case: "Despido Injustificado",
    rating: 5,
    date: "2024-09",
    recovered: "$127,000",
    yearsWorked: 3,
    content:
      "Me despidieron de mi trabajo sin más, y la verdad no sabía ni por dónde empezar con lo de la liquidación. Me recomendaron al Lic. González y fue la onda. Bien claro me explicó lo que me tocaba y me ayudó a que me pagaran hasta el último peso. Recuperé más de $127,000. Si te despiden injusto, búscalo, de verdad.",
    avatar: "/images/avatar-male-1.jpg", // o inicial "R"
    verified: true,
    platform: "Google",
  },
  {
    id: 2,
    name: "Carmen G. López",
    location: "Benito Juárez, CDMX",
    case: "Acoso Laboral",
    rating: 5,
    date: "2024-08",
    recovered: "$95,000",
    yearsWorked: 2,
    content:
      "Estaba sufriendo mucho en mi trabajo, me hacían sentir mal y ya no aguantaba. Pensé que no tenía salida. El Lic. González fue súper humano, me escuchó sin juzgar y me explicó que no tenía por qué aguantar eso. Gracias a él pude salir de esa situación y recuperé mi liquidación más indemnización por daño moral. Me sentí otra vez con dignidad. Mil gracias.",
    avatar: "/images/avatar-female-1.jpg",
    verified: true,
    platform: "Google",
  },
  {
    id: 3,
    name: "Sergio D. Martínez",
    location: "Gustavo A. Madero, CDMX",
    case: "Horas Extras No Pagadas",
    rating: 5,
    date: "2024-10",
    recovered: "$68,500",
    yearsWorked: 4,
    content:
      "Mi patrón nomás no me quería pagar mis horas extras y mis vacaciones. Ya me había dado por vencido. Fui con el Lic. González y en poco tiempo arregló el asunto por conciliación. No tuve que esperar meses ni nada. Recuperé 2 años de horas extras que me debían. Es muy bueno en lo que hace. Recomendadísimo.",
    avatar: "/images/avatar-male-2.jpg",
    verified: true,
    platform: "Google",
  },
  {
    id: 4,
    name: "Mariela S. Hernández",
    location: "Coyoacán, CDMX",
    case: "Accidente Laboral",
    rating: 5,
    date: "2024-07",
    recovered: "$215,000",
    yearsWorked: 6,
    content:
      "Cuando tuve mi accidente en el trabajo, no sabía ni qué hacer con los papeles ni el seguro. El Lic. González me guio paso a paso. Me explicó todo de una manera que sí entendí y me dio mucha confianza. Además del IMSS, recuperé indemnización adicional por la negligencia de la empresa. Siempre estuvo al pendiente. Es un abogado que de verdad te apoya.",
    avatar: "/images/avatar-female-2.jpg",
    verified: true,
    platform: "Google",
  },
  {
    id: 5,
    name: "Fernando V. Castillo",
    location: "Miguel Hidalgo, CDMX",
    case: "Contrato Irregular",
    rating: 5,
    date: "2024-09",
    recovered: "$82,000",
    yearsWorked: 3,
    content:
      "Si necesitan un buen abogado laboral, el Lic. González es el indicado. Me ayudó con un problema de mi contrato donde me pagaban menos del mínimo y sin prestaciones. Fue muy profesional y ganamos el caso. La verdad se ve que sabe y defiende bien. Recuperé lo que me debían de 2 años atrás. ¡Excelente servicio!",
    avatar: "/images/avatar-male-3.jpg",
    verified: true,
    platform: "Google",
  },
  {
    id: 6,
    name: "Patricia R. Mendoza",
    location: "Tlalpan, CDMX",
    case: "Despido por Embarazo",
    rating: 5,
    date: "2024-06",
    recovered: "$185,000",
    yearsWorked: 4,
    content:
      "Me despidieron cuando se enteraron que estaba embarazada. Pensé que no podía hacer nada porque había firmado mi renuncia bajo presión. El Lic. González me explicó que eso era discriminación y que podíamos impugnar el documento. Ganamos el caso y recuperé mi liquidación más indemnización por discriminación. Ahora puedo cuidar a mi bebé tranquila. Gracias infinitas.",
    avatar: "/images/avatar-female-3.jpg",
    verified: true,
    platform: "Google",
    featured: true, // Destacar este testimonio
  },
];

const EXPERENCE_INITIAL = REVIEWS.map(({ name }) =>
  getInitialLettersName(name)
);

export function ReviewsContainer() {
  const carruselRef = useRef<HTMLDivElement>(null);

  const nextCarrusel = () => {
    carruselRef.current?.scrollBy({
      left: 21,
      behavior: "smooth",
    });
  };

  const prevCarrusel = () => {
    carruselRef.current?.scrollBy({
      left: -21,
      behavior: "smooth",
    });
  };

  return (
    <div className="gm_review-container">
      <div className="gm_review-list reveal" ref={carruselRef}>
        {REVIEWS.map(({ id, content, name }) => (
          <Review content={content} name={name} key={id} />
        ))}
      </div>
      <div className="gm_reviews-buttons reveal">
        <button
          className="gm_reviews-button"
          onClick={prevCarrusel}
          name="Botón para navegar hacia atras"
        >
          <Arrow />
        </button>
        <button
          className="gm_reviews-button"
          onClick={nextCarrusel}
          name="Botón para navegar hacia delante"
        >
          <Arrow />
        </button>
      </div>
      <ReviewExperence experenceInitial={EXPERENCE_INITIAL} />
    </div>
  );
}

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M5 12l6 6" />
      <path d="M5 12l6 -6" />
    </svg>
  );
}
