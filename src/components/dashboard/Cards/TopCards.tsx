"use client";

import useFetchDashboard from "../../../hooks/useFetchDashboard";
import {
  FileInput as ActiveDocsIcon,
  CircleDollarSign as DollarIcon,
  Ticket as TicketIcon,
  Recycle as RecycleIcon,
  Wrench as ToolIcon,
  AlertTriangle as DangerIcon,
} from "lucide-react";
import { ReactNode } from "react";

const leases = [{ value: 100 }, { value: 50 }, { value: 90 }, { value: 120 }];

interface TopCards {
  lable: string;
  desc: string;
  icon: ReactNode;
  value: any;
}

export default function TopCards() {
  const { data } = useFetchDashboard<any>();

  const cards: TopCards[] = [
    {
      lable: "Contratos",
      desc: "Ativos",
      icon: (
        <ActiveDocsIcon className=" text-indigo-50 rounded-full bg-indigo-500 w-7 h-7 p-1" />
      ),
      value: "some",
    },
    {
      lable: "Total",
      desc: "Contratos",
      icon: (
        <DollarIcon className=" text-indigo-50 rounded-full bg-indigo-500 w-7 h-7 p-1" />
      ),
      value: "some",
    },
    {
      lable: "Ticket",
      desc: "Médio",
      icon: (
        <TicketIcon className=" text-indigo-50 rounded-full bg-indigo-500 w-7 h-7 p-1" />
      ),
      value: "some",
    },
    {
      lable: "Renovações",
      desc: "Mês",
      icon: (
        <RecycleIcon className=" text-indigo-50 rounded-full bg-indigo-500 w-7 h-7 p-1" />
      ),
      value: "some",
    },
    {
      lable: "Reajustes",
      desc: "Mês",
      icon: (
        <ToolIcon className=" text-indigo-50 rounded-full bg-indigo-500 w-7 h-7 p-1" />
      ),
      value: "some",
    },
    {
      lable: "Inadimplência",
      desc: "+45 dias",
      icon: (
        <DangerIcon className=" text-indigo-50 rounded-full bg-indigo-500 w-7 h-7 p-1" />
      ),
      value: "some",
    },
  ];

  return (
    <div
      id="box-top-cards"
      className="grid  gap-3 drop-shadow-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto justify-center"
    >
      {cards.map((card: TopCards) => {
        return (
          <div
            key={card.lable}
            className="bg-gray-800 rounded-lg  text-sm grid grid-cols-2 w-96 pl-1 items-center md:w-36 lg:w-36 sm:w-64 "
          >
            <div className=" p-2  col-start-1 col-end-2 self-center flex w-full justify-start">
              <p className="justify-start text-xs text-indigo-500 font-bold">
                <p>{card.lable}</p>
                <p className="text-xs text-zinc-500 self-center">{card.desc}</p>
              </p>
            </div>

            <div className="inline-block row-start-2 row-end-3 m-0  ml-2  col-start-1 col-end-2 justify-center mb-2  ">
              {card.icon}
            </div>

            <p className=" p-2 text-sm flex text-indigo-500 font-bold row-start-1 row-end-3 items-center justify-center">
              <p>{card.value}</p>
            </p>
          </div>
        );
      })}
    </div>
  );
}
