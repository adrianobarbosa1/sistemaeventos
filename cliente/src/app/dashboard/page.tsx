import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "sistema de criação de eventos",
};

export default function Home() {
  return (
    <>
      <ECommerce />
    </>
  );
}
