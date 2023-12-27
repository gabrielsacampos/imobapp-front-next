"use client";

import { BuildingsRevenueChart } from "@/app/dashboard/[general]/components/BuildingsRevenueChart";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Loader } from "@/components/Loader";
import { TableAvailableProps } from "@/components/TableAvailableProps";
import { useContext, useEffect, useState } from "react";
import { TableAvailableProperties } from "./components/TableAvailableProperties";
import { TableCard } from "./components/TableCard";
import { TableLeasesToEnd } from "./components/TableLeasesToEnd";
import { TableTab } from "./components/TableTab";
import { TopCards } from "./components/TopCards";
import { TabList, Tab, TabPanel, TabGroup, Flex } from "@tremor/react";
import {
  Building2 as BuildingsIcon,
  FileOutput as LeaseEndingIcon,
} from "lucide-react";

const homeSubtitle = "Aqui você tem uma visão geral do negócio.";

export function GeneralDashboard() {
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
          <DashboardHeader subtitle={homeSubtitle} />
        </div>

        <div className=" overflow-x-auto relative">
          <TopCards />
        </div>

        {/* <BuildingsRevenueChart /> */}

        {/* <div>
          <div className="flex justify-center text-zinc-500 mb-3 pb-1  mt-10 border-b border-white/10 ">
            Aqui você pode conferir os imóveis disponíveis e os contratos perto
            do fim.
          </div>

          <div className="items-center justify-center">
            <TabGroup className="ml-1">
              <TabList>
                <Tab
                  icon={BuildingsIcon}
                  onClick={() => handleTabClick("availableProperties")}
                >
                  Imóveis Disponíveis
                </Tab>
                <Tab
                  icon={LeaseEndingIcon}
                  onClick={() => handleTabClick("leasesToEnd")}
                >
                  Contratos perto do fim (60 dias)
                </Tab>
              </TabList>
            </TabGroup>
            {setCurrentTable()}
          </div>
        </div> */}
      </main>
    </div>
  );
}
