
export const WHATSAPP_PHONE = "5492611234567";

/**
 * Genera la URL de WhatsApp con el mensaje codificado.
 */
export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

/**
 * Mensaje para RESERVAS
 */
export const getReservationMessage = (activityTitle?: string) => {
  if (activityTitle) {
    return `Hola, me gustaría reservar la experiencia: "${activityTitle}"`;
  }
  return "Hola, me gustaría reservar una experiencia.";
};

/**
 * Mensaje para CONSULTAS (Información)
 */
export const getInquiryMessage = (activityTitle: string) => {
  return `Hola, quisiera pedir información sobre la experiencia: "${activityTitle}"`;
};