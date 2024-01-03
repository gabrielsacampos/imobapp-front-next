"use client";

import { DashboardIcon } from "@radix-ui/react-icons";
import { Badge, Card, Metric, Text } from "@tremor/react";
import { ChevronRightIcon } from "lucide-react";


type DashboardHeaderProps = {
  dashboardPage?: string;
  subtitle?: string;
}

export function DashboardHeader({dashboardPage, subtitle}: DashboardHeaderProps) {
  //trazer description para abaixo do dashboard quando em xs
  
  return (
    <div className="flex justify-between">
      <nav className="flex text-zinc-500" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center gap-2">
              <DashboardIcon /> Dashboard 
          </li>
          <li>
            { dashboardPage ? <span className="flex gap-2"><ChevronRightIcon /> {dashboardPage}</span> : ''}
          </li>
        </ol>
      </nav>

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
              <Text className="text-xs">12%</Text>
              </Badge> 
            </Metric>
          </Card>
        </div>
    </div>
  );
}
