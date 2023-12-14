"use client";

import { Charts } from "@/app/dashboard/[general]/components/LineChart";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Loader } from "@/components/Loader";
import { useContext } from "react";
import { TableLeasesToEnd } from "./components/TableLeasesToEnd";
import { TopCards } from "./components/TopCards";

const homeSubtitle = "Aqui você tem uma visão geral do negócio.";

export function GeneralDashboard() {
  return (
    <div className="mb-10 ">
      <main>
        <div className="mb-10 ">
          <DashboardHeader subtitle={homeSubtitle} />
        </div>

        <div className=" overflow-x-auto relative">
          <TopCards />
        </div>

        {/* <div>{!data ? <Loader /> : <Charts />}</div> */}

        <div>
          <div className="flex justify-center text-zinc-500 mb-3 pb-1  mt-10 border-b border-white/10 ">
            Aqui você pode conferir os imóveis disponíveis e os contratos perto
            do fim.
          </div>

          <div className="items-center justify-center">
            <TableLeasesToEnd />
          </div>
        </div>
      </main>
    </div>
  );
}
