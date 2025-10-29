import { useState } from "react";
import "./Card.css";

interface CardProps {
  cardTitle?: string;
  cardContent?: string;
  cardIcon?: string;
  cardTags?: string[];
  href?: string;
}

export function Card({
  cardTitle,
  cardContent,
  cardIcon,
  cardTags,
  href,
}: CardProps) {
  const [isShowContent, setIsShowContent] = useState(false);

  const handleToggleShowContent = () => {
    setIsShowContent(!isShowContent);
  };

  return (
    <article className="gm_slide-card">
      <div className="gm_slide-card-header">
        <span className="gm_slide-icon">
          <img
            src={cardIcon}
            alt={`Icono que hace referencia a ${cardTitle}`}
            loading="lazy"
          />
        </span>
        <h3>{cardTitle}</h3>
      </div>
      <div
        className={`gm_slide-card-content ${
          isShowContent ? "gm_content-show" : ""
        }`}
      >
        <p>{cardContent}</p>

        <div className="gm_slide-card-tags">
          {cardTags &&
            cardTags.map((tag, index) => (
              <span key={index} className="gm_slide-card-tag">
                {tag}
              </span>
            ))}
        </div>
      </div>
      <button
        className="gm_slide-card-button"
        onClick={
          href ? () => (window.location.href = href) : handleToggleShowContent
        }
        role="button"
        aria-label="Botón para ver más información"
      >
        {isShowContent ? "Ver menos" : "¿Aplica Para Mí?"}
        <i className={`${isShowContent ? "rotate" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </i>
      </button>
    </article>
  );
}
