"use client";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Tab } from "@/components/Tab";
import { Table } from "@/app/dashboard/[general]/components/Table";

import { TopCardsLegal } from "./components/TopCards";

const title = "Jurídico";
const homeLegalSubtitle = "Acompanhe os processos e inadimplências";

export const data = {
  title: "Aqui é o título",
  info: "algum dado",
  columnsHeader: [
    "Contrato",
    "Locatário",
    "Imóvel",
    "Débito",
    "Fim",
    "Faturas",
    "Info",
  ],
  columnsBody: ["36", "John", "Rua Grande", "350", "2023/01/01", "2", "Algo"],
  tableCaption: "Isso é só",
};

export default function LegalDash() {
  return (
    <div className="mb-10 ">
      <main>
        <div className="mb-10 ">
          <DashboardHeader subtitle={homeLegalSubtitle} dashboardPage={title} />
        </div>

        <div className=" overflow-x-auto relative">
          <TopCardsLegal />
        </div>

        <Table props={data}>
          <Tab items={["item", "item", "item"]} />
        </Table>
      </main>
    </div>
  );
}
