import { FormInput } from "./FormInput";
import { SendButton } from "./SendButton";
import { useContactForm } from "@/hooks/useContactForm";

import "./ContactForm.css";

export function ContactForm() {
  const { handleSubmit } = useContactForm();

  return (
    <form className="gm_contact-form reveal" onSubmit={handleSubmit}>
      <FormInput
        name="name"
        label="Nombre"
        placeholder="Su nombre"
        type="text"
      />
      <FormInput
        name="email"
        label="Correo electrónico"
        placeholder="correo@correo.com"
        type="email"
      />
      <FormInput
        name="phone"
        label="Teléfono / WhatsApp"
        placeholder="55-0000-0000"
        type="tel"
      />
      <FormInput name="message" label="Mensaje" type="textarea" />

      <div className="gm_contact-button">
        <SendButton />
      </div>
    </form>
  );
}
