import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-[#0f4c81] p-4"
      style={{ bottom: 0, width: "100%", marginBottom: 0 }}
    >
      <div className="flex items-center justify-center">
        <p className="text-white ml-2">Siga-nos</p>
        <div className="ml-2 flex">
          <a
            href="https://www.instagram.com/cefope_anapolis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.youtube.com/seu-canal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 ml-2"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/seu-facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-800 ml-2"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <p className="text-white text-center">
          © 2023 #Semed-Eventos - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
