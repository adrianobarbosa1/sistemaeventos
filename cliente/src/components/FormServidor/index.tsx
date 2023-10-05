"use client";
import { cpf } from "cpf-cnpj-validator";
import { Controller, Form, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import InputMask from "react-input-mask";

interface IFormServidor {
  cpfUser: string;
  name: string;
  whatsapp: string;
  matricula: number;
  secretaria: string;
  unidExercicio: string;
  dtNascimento: string;
  email: string;
}

const FormServidor: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormServidor>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IFormServidor> = (data) => {
    toast.success("Inscrição realizada com sucesso!");

    console.log(data);
    console.log(errors);
  };

  // if (errors?.cpfUser) {
  //   toast.error("CPF inválido", {
  //     id: "invalidCpf",
  //   });
  // }

  // if (!errors.cpfUser && Object.keys(errors).length > 1) {
  //   toast.error("Erro no preenchimento do formulário", {
  //     id: "generalError",
  //   });
  // }

  return (
    <Form id="form" onSubmit={handleSubmit(onSubmit)} control={control}>
      <div className="grid grid-cols-1 max-w-[900px] gap-9 mx-auto justify-start items-start h-screen">
        <div className="grid grid-cols-1 gap-9 w-full">
          <div className="p-6.5">
            <div className="mb-4.5 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="w-full">
                <label className="block text-black dark:text-white">CPF</label>
                <Controller
                  name="cpfUser"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: "CPF é obrigatório",
                    validate: (value) => cpf.isValid(value) || "CPF inválido",
                  }}
                  render={({ field }) => (
                    <InputMask
                      {...field}
                      mask="999.999.999-99"
                      type="text"
                      // onBlur={(e: InputEvent) => onBlurCpf(e)}
                      placeholder="Digite seu CPF"
                      className={`w-full rounded border-[1.5px] border-${
                        errors?.cpfUser ? "meta-1" : "stroke"
                      } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    />
                  )}
                />
                {errors?.cpfUser && (
                  <p className="text-meta-1 text-xs italic mt-1">
                    {errors.cpfUser.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4.5 grid grid-cols-1 gap-6">
              <div className="w-full xl:w-full">
                <label className="block text-black dark:text-white">
                  Nome completo
                </label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Campo obrigatório", minLength: 7 }}
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder="Digite seu nome completo"
                      className={`w-full rounded border-[1.5px] border-${
                        errors?.name ? "meta-1" : "stroke"
                      } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                      {...field}
                    />
                  )}
                />
                {errors?.name && (
                  <p className="text-meta-1 text-xs italic mt-1">
                    {errors?.name.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4.5 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="w-full">
                <label className="block text-black dark:text-white">
                  Telefone
                </label>
                <Controller
                  name="whatsapp" // Defina o nome corretamente
                  defaultValue=""
                  control={control}
                  rules={{
                    required: "Campo obrigatório",
                  }}
                  render={({ field }) => (
                    <InputMask
                      {...field}
                      mask="(99) 99999-9999"
                      type="text"
                      placeholder="Digite seu telefone"
                      className={`w-full rounded border-[1.5px] border-${
                        errors?.whatsapp ? "meta-1" : "stroke"
                      } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                      {...register("whatsapp", {
                        required: "Campo obrigatório",
                      })}
                    />
                  )}
                />
                {errors?.whatsapp && (
                  <p className="text-meta-1 text-xs italic mt-1">
                    {errors.whatsapp?.message?.toString()}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label className="block text-black dark:text-white">
                  Matrícula
                </label>
                <input
                  type="number"
                  required={true}
                  placeholder="Digite sua matrícula"
                  className={`w-full rounded border-[1.5px] border-${
                    errors?.matricula ? "meta-1" : "stroke"
                  } [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                  {...register("matricula", {
                    required: "Campo obrigatório",
                  })}
                />
                {errors?.matricula && (
                  <p className="text-meta-1 text-xs italic mt-1">
                    {errors.matricula.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="w-full">
                <label className="block text-black dark:text-white">
                  Secretaria
                </label>
                <input
                  type="text"
                  required={true}
                  placeholder="Digite a sua Secretaria"
                  className={`w-full rounded border-[1.5px] border-${
                    errors?.secretaria ? "meta-1" : "stroke"
                  } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                  {...register("secretaria", {
                    required: "Campo obrigatório",
                  })}
                />
                {errors?.secretaria && (
                  <p className="text-meta-1 text-xs italic mt-1">
                    {errors.secretaria.message?.toString()}
                  </p>
                )}
              </div>
              <div className="mb-4.5">
                <label className="block text-black dark:text-white">
                  Unidade de Lotação
                </label>
                <input
                  type="text"
                  required={true}
                  placeholder="Digite a sua unidade de lotação"
                  className={`w-full rounded border-[1.5px] border-${
                    errors?.unidExercicio ? "meta-1" : "stroke"
                  } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                  {...register("unidExercicio", {
                    required: "Campo obrigatório",
                  })}
                />
                {errors?.unidExercicio && (
                  <p className="text-meta-1 text-xs italic mt-1">
                    {errors.unidExercicio.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-6 justify-center items-start md:grid-cols-2">
              <div className="w-full">
                <label className="block text-black dark:text-white">
                  Data de nascimento
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required={true}
                    className={`w-full rounded border-[1.5px] border-${
                      errors?.dtNascimento ? "meta-1" : "stroke"
                    } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    {...register("dtNascimento", {
                      required: "Campo obrigatório",
                    })}
                  />
                  {errors?.dtNascimento && (
                    <p className="text-meta-1 text-xs italic mt-1">
                      {errors?.dtNascimento.message?.toString()}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4.5 w-full justify-between items-center">
                <label className="block text-black dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Digite seu email"
                  required={true}
                  className={`w-full rounded border-[1.5px] border-${
                    errors?.email ? "meta-1" : "stroke"
                  } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                  {...register("email", {
                    required: "Campo obrigatório",
                  })}
                />
                {errors?.email && (
                  <p className="text-meta-1 text-xs italic mt-1">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="block w-full items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10
              dark:bg-white dark:text-black dark:bg-none"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default FormServidor;
