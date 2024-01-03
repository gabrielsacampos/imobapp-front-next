"use client";

import { DashboardHeader } from "@/app/private/components/DashboardHeader";
import { BuildingsRevenueChart } from "@/app/private/dashboard/components/BuildingsRevenueChart";
import { useState } from "react";
import { TableLeasesToEnd } from "./components/TableLeasesToEnd";
import { DashboardTables, TableAvailableProperties } from "./components/Tables";
import { TopCards } from "./components/TopCards";

const homeSubtitle = "Aqui você tem uma visão geral do negócio.";

export default function Page() {
  const [selectedTableTab, setSelectedTableTab] = useState(
    "availableProperties"
  );

  function handleTabClick(tableRef: string) {
    setSelectedTableTab(tableRef);
  }

  function setCurrentTable() {
    switch (selectedTableTab) {
      case "availableProperties":
        return <TableAvailableProperties />;
      case "leasesToEnd":
        return <TableLeasesToEnd />;
    }
  }

  return (
    <div className="mb-10">
      <main>
        <div className="mb-10 ">
          <DashboardHeader subtitle={homeSubtitle} dashboardPage="Geral"/>
        </div>

        <div className=" overflow-x-auto relative">
          <TopCards />
        </div>

        <BuildingsRevenueChart />

        <div>
          <div className="flex justify-center text-zinc-500 mb-3 pb-1  mt-10 border-b border-white/10 ">
            Aqui você pode conferir os imóveis disponíveis e os contratos perto
            do fim.
          </div>
          
          <DashboardTables />
        </div>
      </main>
    </div>
  );
}
