interface TolBarProps {
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
}

const TolBar = ({
  textoBotaoNovo = "Novo",

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
}: TolBarProps) => {
  return (
    <div className="flex justify-between bg-white dark:bg-boxdark rounded-md border-gray-500 shadow-md px-2 py-6">
      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
        <button
          className={`inline-flex items-center justify-center rounded-md bg-white hover:bg-gray py-2 px-6 text-center font-medium text-gray-500 hover:bg-opacity-90 lg:px-8 xl:px-10 ${
            mostrarBotaoVoltarCarregando &&
            "h-10 w-36 bg-bodydark animate-pulse"
          }`}
          onClick={aoClicarEmVoltar}
        >
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
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>

          <span>Voltar</span>
        </button>
      )}

      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && (
        <button
          className={`inline-flex items-center justify-center rounded-md bg-boxdark py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 ${
            mostrarBotaoNovoCarregando && "h-10 w-36 bg-bodydark animate-pulse"
          }`}
          onClick={aoClicarEmNovo}
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <span> {textoBotaoNovo}</span>
        </button>
      )}
    </div>
  );
};

export default TolBar;
