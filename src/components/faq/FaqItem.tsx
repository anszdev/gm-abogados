interface Props {
  question: string;
  answer: string;
  name?: string;
}

export function FaqItem({ answer, question, name }: Props) {
  return (
    <details name={name} className="gm_faq-item reveal">
      <summary>
        {question}
        <span aria-label="expander o contraer">
          <svg
            id="open-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
        </span>
      </summary>
      <p>{answer}</p>
    </details>
  );
}
