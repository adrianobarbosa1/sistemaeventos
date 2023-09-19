const Footer = () => {
  return (
    <footer
      className="bg-[#0f4c81] p-4"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        marginBottom: 0,
      }}
    >
      <div className="flex items-center justify-center">
        <p className="text-white ml-2">Siga-nos</p>
        <span className="ml-2"></span>
        <a
          href="https://www.instagram.com/cefope_anapolis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
        ></a>
        <a
          href="https://www.youtube.com/seu-canal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 ml-2"
        ></a>
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
