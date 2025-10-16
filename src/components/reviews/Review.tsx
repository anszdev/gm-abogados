import { getInitialLettersName } from "@/utils";

interface Props {
  content: string;
  name: string;
}

export function Review({ content, name }: Props) {
  const initialLetters = getInitialLettersName(name);

  return (
    <article className="gm_review">
      <span className="gm_review-header-quote">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-quote"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" />
          <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" />
        </svg>
      </span>
      <p className="gm_review-content">{content}</p>
      <footer className="gm_review-footer">
        <span className="gm_review-footer-initial-letters">
          {initialLetters}
        </span>
        <p className="gm_review-footer-name">{name}</p>
      </footer>
    </article>
  );
}
