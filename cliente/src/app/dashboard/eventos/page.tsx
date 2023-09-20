"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableEventos from "@/components/Tables/TableEventos";
import TolBar from "@/components/TolBar";
import React from "react";

const Eventos: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Eventos" />

      <div className="flex flex-col gap-10">
        <TolBar />
        <TableEventos />
      </div>
    </>
  );
};

export default Eventos;
