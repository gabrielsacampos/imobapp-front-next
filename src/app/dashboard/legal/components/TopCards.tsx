"use client";

import {
  CircleDollarSign as DollarIcon,
  Ticket as TicketIcon,
  Recycle as RecycleIcon,
  Wrench as ToolIcon,
  AlertTriangle as DangerIcon,
  Gavel as GavelIcon,
  Clock4 as ClockIcon,
  ScanEye as ScanEyeIcon,
  HeartHandshake as HandShakeIcon
} from "lucide-react";

interface Card {
  lable: string;
  desc: string;
  icon: any;
  value: any;
}

export function TopCardsLegal() {
  // const { data } = useFetchDashboard<any>();
  const data = {
    topCardsData: {
      leases_active_ticket: "2.215,00",
      leases_active_count: 156,
      leases_count_readjust: 0,
      leases_count_renew: 0,
      leases_active_total_value: "345.598,69",
      invoices_pending_total_value: "59.353,69",
    },
  };

  const { topCardsData } = data;

  const cards: Card[] = [
    {
      lable: "Inadimplentes",
      desc: "+45 dias",
      icon: <DangerIcon color="gray" size={40} />,
      value: topCardsData.leases_active_total_value,
    },
    {
      lable: "Despejo",
      desc: "Contratos",
      icon: <ClockIcon color="gray" size={40} />,
      value: topCardsData.leases_active_count,
    },
    {
      lable: "Judicializado",
      desc: "Contratos",
      icon: <GavelIcon color="gray" size={40} />,
      value: topCardsData.leases_active_ticket,
    },
    {
      lable: "Monitoramento",
      desc: "Valor",
      icon: <ScanEyeIcon color="gray" size={40} />,
      value: topCardsData.leases_count_renew,
    },
    {
      lable: "Acordo",
      desc: "Total",
      icon: <HandShakeIcon color="gray" size={40} />,
      value: topCardsData.leases_count_readjust,
    },
    {
      lable: "Inadimplência",
      desc: "+45 dias",
      icon: <DangerIcon color="gray" size={40} />,
      value: topCardsData.invoices_pending_total_value,
    },
  ];

  return (
    <div className="container py-3 pl-3  justify-between gap-6 flex flex-row">
      {cards.map((item) => {
        return (
          <div
            key={item.lable}
            className="h-48 w-36  min-w-max gap-6 rounded-xl border border-white/10 bg-gray-800 drop-shadow-2xl backdrop-blur-sm"
          >
            <div className="flex items-center justify-center -ml-3 -mt-3 h-16 w-16 rounded-full border border-white/10 bg-indigo-800">
              <p>{item.icon}</p>
            </div>

            <header>
              <div className="flex flex-col h-1/2 justify-center items-center w-36">
                <div className="text-zinc-400">{item.lable}</div>
                <div className="text-zinc-500">{item.desc}</div>
              </div>
            </header>

            <div className="item flex h-1/2 items-center justify-center">
              <p className="text-xl font-semibold text-zinc-400 ">
                {item.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
