import { Package } from "@/types/package";
import Image from "next/image";

const packageData: Package[] = [
  {
    image: "/images/product/product-01.png",
    name: "Oficina pedagogica",
    dtInicio: `18/09/2023`,
    dtFim: `18/10/2023`,
    turnos: ["Matutino", "Vespertino", "Noturno"],
    participantes: "500",
    limiteParticipantes: "600",
    status: "Aberto",
  },
  {
    image: "/images/product/product-02.png",
    name: "Oficina pedagogica",
    dtInicio: `18/09/2023`,
    dtFim: `18/10/2023`,
    turnos: ["Matutino", "Vespertino"],
    participantes: "500",
    limiteParticipantes: "600",
    status: "Aberto",
  },
  {
    image: "/images/product/product-03.png",
    name: "Oficina pedagogica",
    dtInicio: `18/09/2023`,
    dtFim: `18/10/2023`,
    turnos: ["Vespertino"],
    participantes: "500",
    limiteParticipantes: "600",
    status: "Fechado",
  },
  {
    image: "/images/product/product-04.png",
    name: "Oficina pedagogica",
    dtInicio: `18/09/2023`,
    dtFim: `18/10/2023`,
    turnos: ["Matutino", "Noturno"],
    participantes: "500",
    limiteParticipantes: "600",
    status: "Ativo",
  },
];

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Imagem
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                DT Inicio / DT Fim
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                turno
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Participantes / Limite
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="flex border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <div className="h-12.5 w-15 rounded-md">
                    <Image
                      src={packageItem.image}
                      width={60}
                      height={50}
                      alt="Product"
                    />
                  </div>
                  <p className="text-sm ml-4 text-black dark:text-white">
                    {packageItem.name}
                  </p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.dtInicio} - {packageItem.dtFim}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.turnos?.map((turno, i) => (
                      <p key={i} className="text-sm">
                        {turno}
                      </p>
                    ))}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.participantes}/
                    {packageItem.limiteParticipantes}
                  </p>
                </td>

                {/* STATUS */}
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      packageItem.status === "Aberto"
                        ? "text-success bg-success"
                        : packageItem.status === "Fechado"
                        ? "text-danger bg-danger"
                        : "text-warning bg-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>

                {/* ACTIONS */}
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>

                    <button className="hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
