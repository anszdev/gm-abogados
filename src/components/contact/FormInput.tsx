interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "textarea" | "tel";
}

export function FormInput({ label, name, type, placeholder }: FormInputProps) {
  return (
    <div className="gm_contact-input">
      <label htmlFor={name}>{label}</label>
      {type !== "textarea" ? (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          required
          {...(type === "tel" && {
            pattern: "[0-9]*",
            inputMode: "numeric",
            maxLength: 10,
            onInput: (e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              );
            },
          })}
        />
      ) : (
        <textarea placeholder={placeholder} name={name} id={name} />
      )}
    </div>
  );
}
