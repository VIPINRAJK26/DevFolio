import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919495810118?text=Hi%20Vipin%2C%20I%20just%20visited%20your%20portfolio%20and%20wanted%20to%20reach%20out%20to%20you%21"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-400 to-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-1000 animate-bounce"
      title="WhatsApp Me"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
