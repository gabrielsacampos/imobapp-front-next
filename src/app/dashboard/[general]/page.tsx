"use client";
import {
  DashboardProvider,
} from "@/app/contexts/DashboardContext";
import { Charts } from "@/app/dashboard/[general]/components/LineChart";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Table } from "./components/Table";
import { TopCards } from "./components/TopCards";

const homeSubtitle = "Aqui você tem uma visão geral do negócio.";

const tablesName = ["tabela1", "tabela2", "table3"];
export const data = {
  title: "Aqui é o título",
  info: "algum dado",
  headers: [
    "Contrato",
    "Locatário",
    "Imóvel",
    "Débito",
    "Fim",
    "Faturas",
    "Info",
  ],
  rows: [
    ["36", "John", "Rua Grande", "350", "2023/01/01", "2", "Algo"],
    ["2", "Gry", "Rua Grande", "350", "2023/01/01", "2", "Algo"],
    ["32", "Joe", "Rua Grande", "350", "2023/01/01", "2", "Algo"],
  ],
  tableCaption: "Isso é só",
};

export function GeneralDashboard() {

  return (
    <DashboardProvider>
      <div className="mb-10 ">
        Hello
        <main>
          <div className="mb-10 ">
            <DashboardHeader subtitle={homeSubtitle} />
          </div>

          <div className=" overflow-x-auto relative">
            <TopCards />
          </div>

          <div>{<Charts />}</div>

          <div>
          <div className="flex justify-center text-zinc-500 mb-3 pb-1  mt-10 border-b border-white/10 ">
            Aqui você pode conferir os imóveis disponíveis e os contratos perto
            do fim.
          </div>

          <div className="items-center justify-center">
            <Table />
          </div>
          </div>
        </main>
      </div>
    </DashboardProvider>
  );
}
