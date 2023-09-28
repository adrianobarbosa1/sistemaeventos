import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = ["Inicio", "Login"];

const Header = () => {
  return (
    <nav className="bg-[#0f4c81] flex justify-between items-center h-20 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round" // Alterado para strokeLinecap
            strokeLinejoin="round" // Alterado para strokeLinejoin
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      </div>

      <div className="text-white text-center">
        <Image
          width={176}
          height={32}
          src="https://api.anapolis.go.gov.br/apiupload/logo/prefeitura_branco.png"
          alt="Logo"
          className="mx-auto block"
        />
      </div>

      <div className="text-white">
        <ul className="flex space-x-0">
          {links.map((link) => (
            <li key={link}>
              <Link
                href={link.toLowerCase()}
                className="p-2 hover:bg-[#f7dc79] hover:rounded-md active:bg-[#f7dc79] focus:ring focus:rounded-md focus:outline-none focus:ring-gray"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
