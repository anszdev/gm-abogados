import type { FormEvent } from "react";
import toast from "react-hot-toast";
import { handleSendEmail } from "@/lib/email";
import { generateContactEmail } from "@/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const toastSettings = {
  duration: 3000,
  position: "bottom-right" as const,
};

export const useContactForm = () => {
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (data: FormData): boolean => {
    const { name, email, message } = data;

    if (!name || !email || !message) {
      toast.error("Por favor, complete todos los campos requeridos");
      return false;
    }

    if (!validateEmail(email)) {
      toast.error("Por favor, ingrese un correo electrónico válido");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      phone: formData.get("phone") as string,
    };

    if (!validateForm(data)) return;

    const emailTemplate = generateContactEmail(
      data.name,
      data.email,
      data.message,
      data.phone
    );

    const loadingToast = toast.loading("Enviando mensaje...", {
      position: "bottom-right",
    });

    try {
      const success = await handleSendEmail(
        data.name,
        data.email,
        emailTemplate
      );

      if (!success) throw new Error("Error al enviar el mensaje");

      toast.success(
        "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
        {
          id: loadingToast,
          ...toastSettings,
        }
      );
      form.reset();
    } catch (error) {
      toast.error(
        "No se pudo enviar el mensaje. Por favor, intente de nuevo más tarde.",
        {
          id: loadingToast,
          ...toastSettings,
        }
      );
      console.error("Error sending email:", error);
    }
  };

  return { handleSubmit };
};
