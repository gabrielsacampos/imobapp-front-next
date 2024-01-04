"use client";

import { DashboardHeader } from "@/app/private/components/DashboardHeader";
import { BuildingsRevenueChart } from "@/app/private/dashboard/components/BuildingsRevenueChart";
import { DashboardTables, Tables } from "./components/Tables";
import { TopCards } from "./components/TopCards";
import { TableExpiringLeases } from "./components/TableExpiringLeases";
import { TableAvailableProperties } from "./components/TableAvailableProperties";

const homeSubtitle = "Aqui você tem uma visão geral do negócio.";

export default function Page() {
  return (
      <div className="max-w-5xl ml-64 pb-16">
          <DashboardHeader subtitle={homeSubtitle} dashboardPage="Geral"/>
          <TopCards />
          <BuildingsRevenueChart />
          <Tables />
      </div>
      
      
  );
}
