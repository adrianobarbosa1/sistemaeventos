export default function Home() {
  return (
    <section className="w-screen mt-12">
      <div className="flex flex-1 justify-start items-center flex-col gap-6">
        <h5 className="font-bold text-4xl">Cursos</h5>
        <p className="text-2xl uppercase font-light">
          Centro de Formação de Profissionais
        </p>
        <p className="w-3/5 text-center text-2x1">
          Escolha um de Nossos Cursos Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="flex justify-center items-center gap-6">
          <img
            className="w-1/4 max-w-md shadow-md hover:shadow-xl border border-gray-300 rounded-lg transition-transform transform hover:scale-105"
            src="https://portaleducacao.anapolis.go.gov.br/portal/wp-content/uploads/2023/09/SABERES.png"
            alt="Img1"
          ></img>
          <img
            className="w-1/4 max-w-md shadow-md hover:shadow-xl border border-gray-300 rounded-lg transition-transform transform hover:scale-105"
            src="https://portaleducacao.anapolis.go.gov.br/portal/wp-content/uploads/2023/09/SABERES.png"
            alt="Img2"
          ></img>
          <img
            className="w-1/4 max-w-md shadow-md hover:shadow-xl border border-gray-300 rounded-lg transition-transform transform hover:scale-105"
            src="https://portaleducacao.anapolis.go.gov.br/portal/wp-content/uploads/2023/09/SABERES.png"
            alt="Img3"
          ></img>
        </div>
        <div className="flex justify-center items-center gap-70">
          <button className="bg-[#0f4c81] hover:bg-graydark text-white font-semibold py-2 px-4 rounded-md flex items-center space-x-2 focus:ring focus:ring-blue-300">
            Inscreva-se
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <a>
          <p className={`m-0 max-w-[30ch]`}></p>
        </a>
      </div>
    </section>
  );
}
