import React from "react";

const WhatsAppIcon: React.FC = () => {
  return (
    <a
      href="https://wa.me/9959325457?text=Hello%20SVIPS%2C%20I%20would%20like%20to%20know%20more%20about%20your%20admissions."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 left-6 whatsapp-icon animate-fly-fall"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Icon"
        className="w-12 h-12"
      />
    </a>
  );
};

export default WhatsAppIcon;