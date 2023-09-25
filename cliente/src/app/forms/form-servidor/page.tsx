import FormServidor from "@/components/FormServidor";
import Image from "next/image";
import React from "react";

export default function Form() {
  return (
    <div className="grid items-center my-1 justify-center h-screen">
      <div className="grid grid-cols-1 items-center relative z-20">
        <Image
          src={"/images/cover/cover-02.jpg"}
          alt="profile cover"
          className="h-full max-w-[900px] rounded object-cover object-center"
          width={970}
          height={260}
        />
        <div className="absolute p-1 inset-0 flex flex-col items-center text-white justify-center gap-3 z-1 rounded">
          <h1 className="text-2xl font-bold lg:mx-32 md:mx-16 mx-4">
            Saberes em Rede - 2023
          </h1>
          <h2>Inscrição de participante</h2>
        </div>
      </div>
      <FormServidor />
    </div>
  );
}
