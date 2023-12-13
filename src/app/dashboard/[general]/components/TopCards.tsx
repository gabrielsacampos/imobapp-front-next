import { DashboardContext } from "@/app/contexts/DashboardContext";
import { BadgeError } from "@/components/BadgeError";
import { Loader } from "@/components/Loader";
import {
  FileInput as ActiveDocsIcon,
  CircleDollarSign as DollarIcon,
  Ticket as TicketIcon,
  Recycle as RecycleIcon,
  Wrench as ToolIcon,
  AlertTriangle as DangerIcon,
} from "lucide-react";
import { useContext } from "react";

export type TopCardsProps = {
  leases: {
    activeCount: number;
    totalValue: string;
    ticket: string;
    renewsCount: number;
    readjustmentCount: number;
  };
  invoices: {
    totalPending: string;
  };
};

export function TopCards() {
  const data = useContext(DashboardContext);

  if (!data.topcards) {
    return (
      <Loader />
    );
  }

  const { invoices, leases } = data.topcards;

  const cards = [
    {
      lable: "Contratos",
      desc: "Ativos",
      icon: <ActiveDocsIcon color="gray" size={40} />,
      value: leases.totalValue,
    },
    {
      lable: "Total",
      desc: "Contratos",
      icon: <DollarIcon color="gray" size={40} />,
      value: leases.activeCount,
    },
    {
      lable: "Ticket",
      desc: "Médio",
      icon: <TicketIcon color="gray" size={40} />,
      value: leases.ticket,
    },
    {
      lable: "Renovações",
      desc: "Mês",
      icon: <RecycleIcon color="gray" size={40} />,
      value: leases.renewsCount,
    },
    {
      lable: "Reajustes",
      desc: "Mês",
      icon: <ToolIcon color="gray" size={40} />,
      value: leases.readjustmentCount,
    },
    {
      lable: "Inadimplência",
      desc: "+45 dias",
      icon: <DangerIcon color="gray" size={40} />,
      value: invoices.totalPending,
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
