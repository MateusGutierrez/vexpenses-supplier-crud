const whatsappUrl = 'https://api.whatsapp.com/send?phone=';
const message = 'Olá, vim por meio da VExpenses - supplier!';

export const useGoToWhatsApp = (phone: string) => {
  const formattedPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  window.open(
    `${whatsappUrl}${formattedPhone}&text=${encodedMessage}`,
    '_blank'
  );
};
