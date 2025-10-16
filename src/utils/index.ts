export const getInitialLettersName = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");
};

export const gmLinks = {
  whatsapp:
    "https://wa.me/525566011051?text=Buen%20día%20Lic.%20González,%20me%20interesa%20obtener%20asesoría%20legal%20laboral.",
  instagram: "https://www.instagram.com/ji_gm3?igsh=Y2pmMDNvcDlhY3Nl",
  facebook: "https://www.facebook.com/share/17Sbbt1TUL/",
};
