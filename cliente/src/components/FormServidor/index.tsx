"use client";
import { cpf } from "cpf-cnpj-validator";
import { Controller, Form, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import InputMask from "react-input-mask";

const FormServidor: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    toast.success("Registro concluído com sucesso");

    console.log(data);
    console.log(errors);
  };

  if (errors?.cpfUser) {
    toast.error("CPF inválido", {
      id: "invalidCpf",
    });
  }

  if (!errors.cpfUser && Object.keys(errors).length > 1) {
    toast.error("Erro no preenchimento do formulário", {
      id: "generalError",
    });
  }

  return (
    <Form id="form" onSubmit={handleSubmit(onSubmit)} control={control}>
      <div className="grid grid-cols-1 max-w-[900px] gap-9 mx-auto justify-center items-center h-screen">
        <div className="grid grid-cols-1 gap-9 w-full">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="grid border-b border-stroke py-10 px-6.5 dark:border-strokedark justify-center items-center">
              <h3 className="font-bold text-black dark:text-white">
                Formulário de Inscrição - Servidor
              </h3>
            </div>
            <div className="p-6.5">
              <div className="mb-4.5 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="w-full">
                  <label className="block text-black dark:text-white">
                    CPF
                  </label>

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
                      {errors?.cpfUser?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4.5 grid grid-cols-1 gap-6">
                <div className="w-full xl:w-full">
                  <label className="block text-black dark:text-white">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    placeholder="Digite seu nome completo"
                    required={true}
                    className={`w-full rounded border-[1.5px] border-${
                      errors?.name ? "meta-1" : "stroke"
                    } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    {...register("name", { required: "Campo obrigatório" })}
                  />
                  {errors?.name && (
                    <p className="text-meta-1 text-xs italic mt-1">
                      {errors?.name?.message}
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
                    name="phone" // Defina o nome corretamente
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
                          errors?.phone ? "meta-1" : "stroke"
                        } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                        {...register("phone", {
                          required: "Campo obrigatório",
                        })}
                      />
                    )}
                  />
                  {errors?.phone && (
                    <p className="text-meta-1 text-xs italic mt-1">
                      {errors?.phone?.message}
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
                      errors?.registry ? "meta-1" : "stroke"
                    } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    {...register("registry", {
                      required: "Campo obrigatório",
                    })}
                  />
                  {errors?.registry && (
                    <p className="text-meta-1 text-xs italic mt-1">
                      {errors.registry?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="mb-4.5">
                  <label className="block text-black dark:text-white">
                    Secretaria
                  </label>
                  <input
                    type="text"
                    required={true}
                    placeholder="Digite a sua Secretaria"
                    className={`w-full rounded border-[1.5px] border-${
                      errors?.secretary ? "meta-1" : "stroke"
                    } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    {...register("secretary", {
                      required: "Campo obrigatório",
                    })}
                  />
                  {errors?.unit && (
                    <p className="text-meta-1 text-xs italic mt-1">
                      {errors.secretary?.message}
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
                      errors?.unit ? "meta-1" : "stroke"
                    } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    {...register("unit", { required: "Campo obrigatório" })}
                  />
                  {errors?.unit && (
                    <p className="text-meta-1 text-xs italic mt-1">
                      {errors.unit?.message}
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
                        errors?.birthday ? "meta-1" : "stroke"
                      } bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                      {...register("birthday", {
                        required: "Campo obrigatório",
                      })}
                    />
                    {errors?.birthday && (
                      <p className="text-meta-1 text-xs italic mt-1">
                        {errors?.birthday?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4.5 w-full justify-between items-center">
                  <div className="w-full">
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
                        {errors?.email?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded p-3 font-medium bg-primary text-white"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default FormServidor;
