
import React from 'react';
import { WhatsAppIcon } from './icons';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/971000000000?text=Hi%20Tallyworks,%20I'm%20visiting%20your%20website%20and%20I'd%20like%20to%20inquire%20about..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-110 z-40"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
