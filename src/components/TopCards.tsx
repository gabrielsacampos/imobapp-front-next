"use client";

import { cards } from "@/constants/TOPCARDS_ITEMS/TOPCARDS_DASH_ITEMS";
import useFetchDashboard from '../hooks/useFetchDashboard';
import { Card } from "./Card";


export function TopCards() {
  const { data } = useFetchDashboard<any>();

  //contratos ativos
  //total contratos
  // ticket medio contrato
  // renovações
  // reajustes contratos
  // inadimplencia

  return (
  <div className="flex justify-between gap-6">
	{cards.map((item) => {
		return <Card key={item.lable} lable={item.lable} icon={item.icon} desc={item.desc} value={item.value}/>
	})}
	</div>
  )
}
