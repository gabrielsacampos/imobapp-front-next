"use client"
import { DashboardHeader } from "../components/DashboardHeader";
import { BuildingsRevenueChart } from "./components/BuildingsRevenueChart";
import { Tables } from "./components/Tables";
import { TopCards } from "./components/TopCards";

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
