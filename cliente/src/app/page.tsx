import Image from "next/image";

export default function Home() {
  return (
    <section className="w-screen mt-12 p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="flex flex-1 justify-start items-center flex-col gap-6">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Cursos
        </h1>
        <p className="text-xl md:text-2xl uppercase font-light text-center">
          Centro de Formação de Profissionais
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center">
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
        <div className="flex flex-wrap -mx-4">
          {/* CARD 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div
              className={`rounded-xl overflow-hidden flex justify-center items-center`}
            >
              <Image
                src="https://portaleducacao.anapolis.go.gov.br/portal/wp-content/uploads/2023/09/SABERES.png"
                alt="foto 1"
                className="object-contain max-w-full h-auto w-auto"
                width={400}
                height={400}
              />
            </div>

            <h5 className="text-2xl p-3 text-center flex flex-col md:text-2xl font-bold mt-3">
              Evento 1
            </h5>
            <div className="p-5 flex flex-col">
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                01 de janeiro de 2024
              </p>
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Local: Evento 1
              </p>
              <a
                href="#"
                className="text-center bg-[#0f4c81] text-white py-2 rounded-lg font-semibold mt-4 hover:bg-black focus:scale-95 transition-all duration-200 ease-out "
              >
                {" "}
                Inscreva-se{" "}
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div
              className={`rounded-xl overflow-hidden flex justify-center items-center`}
            >
              <Image
                src="https://portaleducacao.anapolis.go.gov.br/portal/wp-content/uploads/2023/09/SABERES.png"
                alt="foto 1"
                className="object-contain max-w-full h-auto w-auto"
                width={400}
                height={400}
              />
            </div>

            <h5 className="text-2xl text-center p-3 flex flex-col md:text-2xl font-bold mt-3">
              Evento 2
            </h5>
            <div className="p-5 flex flex-col">
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                01 de janeiro de 2024
              </p>
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Local: Evento 1
              </p>
              <a
                href="#"
                className="text-center bg-[#0f4c81] text-white py-2 rounded-lg font-semibold mt-4 hover:bg-black focus:scale-95 transition-all duration-200 ease-out "
              >
                {" "}
                Inscreva-se{" "}
              </a>
            </div>
          </div>
          {/* CARD 3 */}

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div
              className={`rounded-xl overflow-hidden flex justify-center items-center`}
            >
              <Image
                src="https://portaleducacao.anapolis.go.gov.br/portal/wp-content/uploads/2023/09/SABERES.png"
                alt="foto 1"
                className="object-contain max-w-full h-auto w-auto"
                width={400}
                height={400}
              />
            </div>

            <h5 className="text-2xl text-center p-3 flex flex-col md:text-2xl font-bold mt-3">
              Evento 3
            </h5>
            <div className="p-5 flex flex-col">
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                01 de janeiro de 2024
              </p>
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Local: Evento 1
              </p>
              <a
                href="#"
                className="text-center bg-[#0f4c81] text-white py-2 rounded-lg font-semibold mt-4 hover:bg-black focus:scale-95 transition-all duration-200 ease-out "
              >
                {" "}
                Inscreva-se{" "}
              </a>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div
              className={`rounded-xl overflow-hidden flex justify-center items-center`}
            >
              <Image
                src="https://portaleducacao.anapolis.go.gov.br/portal/wp-content/uploads/2023/09/SABERES.png"
                alt="foto 1"
                className="object-contain max-w-full h-auto w-auto"
                width={400}
                height={400}
              />
            </div>

            <h5 className="text-2xl text-center p-3 flex flex-col md:text-2xl font-bold mt-3">
              Evento 4
            </h5>
            <div className="p-5 flex flex-col">
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                01 de janeiro de 2024
              </p>
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Local: Evento 1
              </p>
              <a
                href="#"
                className="text-center bg-[#0f4c81] text-white py-2 rounded-lg font-semibold mt-4 hover:bg-black focus:scale-95 transition-all duration-200 ease-out "
              >
                {" "}
                Inscreva-se{" "}
              </a>
            </div>
          </div>

          {/* CARD 5  */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div
              className={`rounded-xl overflow-hidden flex justify-center items-center`}
            >
              <Image
                src="https://portaleducacao.anapolis.go.gov.br/portal/wp-content/uploads/2023/09/SABERES.png"
                alt="foto 1"
                className="object-contain max-w-full h-auto w-auto"
                width={400}
                height={400}
              />
            </div>

            <h5 className="text-2xl text-center p-3 flex flex-col md:text-2xl font-bold mt-3">
              Evento 5
            </h5>
            <div className="p-5 flex flex-col">
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                01 de janeiro de 2024
              </p>
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Local: Evento 1
              </p>
              <a
                href="#"
                className="text-center bg-[#0f4c81] text-white py-2 rounded-lg font-semibold mt-4 hover:bg-black focus:scale-95 transition-all duration-200 ease-out "
              >
                {" "}
                Inscreva-se{" "}
              </a>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div
              className={`rounded-xl overflow-hidden flex justify-center items-center`}
            >
              <Image
                src="https://portaleducacao.anapolis.go.gov.br/portal/wp-content/uploads/2023/09/SABERES.png"
                alt="foto 1"
                className="object-contain max-w-full h-auto w-auto"
                width={400}
                height={400}
              />
            </div>

            <h5 className="text-2xl text-center p-3 flex flex-col md:text-2xl font-bold mt-3">
              Evento 6
            </h5>
            <div className="p-5 flex flex-col">
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                01 de janeiro de 2024
              </p>
              <p className="text-gray-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Local: Evento 1
              </p>
              <a
                href="#"
                className="text-center bg-[#0f4c81] text-white py-2 rounded-lg font-semibold mt-4 hover:bg-black focus:scale-95 transition-all duration-200 ease-out "
              >
                {" "}
                Inscreva-se{" "}
              </a>
            </div>
          </div>
        </div>
        {/* fim grid */}

        <a href="#" className="text-center">
          <p className={`m-0 max-w-[30ch] text-blue-500 hover:underline`}>
            Saiba mais
          </p>
        </a>
      </div>
    </section>
  );
}
