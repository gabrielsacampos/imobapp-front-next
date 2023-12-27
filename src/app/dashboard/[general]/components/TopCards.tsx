import { Loader } from "@/components/Loader";
import { useTopCards } from "@/hooks/useDashboard";
import { priceFormatter } from "@/utils/formatter";
import {
  FileInput as ActiveDocsIcon,
  AlertTriangle as DangerIcon,
  CircleDollarSign as DollarIcon,
  Recycle as RecycleIcon,
  Ticket as TicketIcon,
  Wrench as ToolIcon,
} from "lucide-react";


export function TopCards() {
  const { data, error, isLoading } = useTopCards()
  

  if (isLoading) {
    return <Loader />;
  }

  console.log(data);
  const { invoices, leases } = data!;

  const cards = [
    {
      lable: "Contratos",
      desc: "Ativos",
      icon: <ActiveDocsIcon color="gray" size={40} />,
      value: priceFormatter.format(leases.total),
    },
    {
      lable: "Total",
      desc: "Contratos",
      icon: <DollarIcon color="gray" size={40} />,
      value: leases.count,
    },
    {
      lable: "Ticket",
      desc: "Médio",
      icon: <TicketIcon color="gray" size={40} />,
      value: priceFormatter.format(leases.ticket),
    },
    {
      lable: "Renovações",
      desc: "Mês",
      icon: <RecycleIcon color="gray" size={40} />,
      value: leases.countRenew,
    },
    {
      lable: "Reajustes",
      desc: "Mês",
      icon: <ToolIcon color="gray" size={40} />,
      value: leases.countReadjustment,
    },
    {
      lable: "Inadimplência",
      desc: "+45 dias",
      icon: <DangerIcon color="gray" size={40} />,
      value: priceFormatter.format(invoices.totalPending),
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
              <p className="text-lg font-semibold text-zinc-400 ">
                {item.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
