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
import { Card } from "@tremor/react";

export function TopCards() {
  const { data, error, isLoading } = useTopCards()
  

  if (isLoading) {
    return <Loader />;
  }

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
      value: leases.count_renew,
    },
    {
      lable: "Reajustes",
      desc: "Mês",
      icon: <ToolIcon color="gray" size={40} />,
      value: leases.count_readjustment,
    },
    {
      lable: "Inadimplência",
      desc: "+45 dias",
      icon: <DangerIcon color="gray" size={40} />,
      value: priceFormatter.format(invoices.total_pending),
    },
  ];

  return (
    <div className="container py-3 pl-3  justify-between gap-6 flex flex-row">
      {cards.map((item) => {
        return (
          <Card
            decoration="top" decorationColor="indigo"
            key={item.lable}
          >
            <header className="flex  flex-col items-center">
                <div className="dark:text-zinc-400">{item.lable}</div>
                <div className="dark:text-zinc-500 text-xs italic">{item.desc}</div>
            </header>

            <div className="item flex h-1/2 items-center justify-center">
              <p className="text-lg font-semibold dark:text-zinc-300">
                {item.value}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
