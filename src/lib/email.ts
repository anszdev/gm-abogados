export const handleSendEmail = async (
  name: string,
  email: string,
  message: string
): Promise<boolean> => {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const data = await response.json();
    return true;
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return false;
  }
};
