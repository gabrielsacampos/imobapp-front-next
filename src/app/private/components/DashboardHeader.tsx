"use client";

import { Badge, Card, Metric, Text } from "@tremor/react";


type DashboardHeaderProps = {
  dashboardPage?: string;
  subtitle?: string;
}

export function DashboardHeader({dashboardPage, subtitle}: DashboardHeaderProps) {
  //trazer description para abaixo do dashboard quando em xs
  
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold  text-3xl  md:text-5xl text-gray-700 dark:text-white/50">Dashboard</h1>
        <h3 className=' ml-5 text-2xl font-thin text-white/50  flex self-center'> { dashboardPage ? ` / ${dashboardPage}` : ''}</h3>
        <div className="flex flex-col sm:flex-row gap-2 mr-5">
          <Card className="flex items-center gap-1 p-2 w-24">
            <Text className="text-xs">IGPM</Text>
            <Metric className="text-xs">
             <Badge color='green'>
              <Text className="text-xs">12%</Text>
              </Badge> 
            </Metric>
          </Card>
          <Card className="flex items-center gap-1 p-2 w-24">
            <Text className="text-xs">IPCA</Text>
            <Metric className="text-xs">
             <Badge color='green'>
              <Text className="text-xs dark:text-zinc-200">12%</Text>
              </Badge> 
            </Metric>
          </Card>
        </div>
      </div>
      <div className="border border-t-0 border-zinc-400 dark:border-white/10 my-2"></div>
      <p className="text-zinc-500">{subtitle}</p>
    </div>
  );
}
