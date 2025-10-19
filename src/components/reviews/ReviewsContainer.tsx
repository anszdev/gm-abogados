import { useRef } from "react";
import { getInitialLettersName } from "@/utils";
import { Review } from "./Review";
import { ReviewExperence } from "./ReviewExperence";
import "./Reviews.css";

const REVIEWS = [
  {
    id: 1,
    name: "Raúl P. Ramírez",
    content:
      "Me despidieron de mi chamba sin más, y la verdad no sabía ni por dónde empezar con lo de la liquidación. Me recomendaron al Lic. Ian González y fue la onda. Bien claro lo que me tocaba y me ayudó a que me pagaran hasta el último peso. Si te despiden injusto, busquen a Jonathan Mora, de verdad.",
  },
  {
    id: 2,
    name: "Carmen G. López",
    content:
      "La verdad es que estaba sufriendo mucho en mi trabajo, me hacían sentir mal y ya no aguantaba. Pensé que no tenía salida. El Lic. González fue súper humano, me escuchó sin juzgar y me explicó que no tenía por qué aguantar eso. Gracias a él pude salir de esa situación y me sentí otra vez con dignidad. Mil gracias, Lic. Jonathan.",
  },
  {
    id: 3,
    name: "Sergio D.",
    content:
      "Mi patrón nomás no me quería pagar mis horas extras y mis vacaciones. Ya me había dado por vencido. Fui con el Lic. Mora y en poco tiempo arregló el asunto. No tuve que esperar meses ni nada. Es muy bueno en lo que hace. Recomendadísimo.",
  },
  {
    id: 4,
    name: "Mariela S.",
    content:
      "Cuando tuve mi accidente en el trabajo, no sabía ni qué hacer con los papeles ni el seguro. Jonathan Ian me guio paso a paso. Me explicó todo de una manera que sí entendí y me dio mucha confianza. Siempre estuvo al pendiente. Es un abogado que de verdad te apoya.",
  },
  {
    id: 5,
    name: "Fernando V.",
    content:
      "Si necesitan un buen abogado laboral, el Lic. González Mora es el indicado. Me ayudó con un problema de mi contrato y fue muy profesional. La verdad se ve que sabe y defiende bien. ¡Excelente servicio!",
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
