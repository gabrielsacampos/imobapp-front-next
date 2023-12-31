import { CardSkeleton } from "@/app/components/skeletons/CardSkeleton";
import { useTopCards } from "@/hooks/useDashboard";
import { priceFormatter } from "@/utils/formatter";
import { Card } from "@tremor/react";

export function TopCards() {
  const { data, error, isLoading } = useTopCards()
  

  if (isLoading) {
    return (
      <div className="flex justify-center gap-4 mt-2">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  const { invoices, leases } = data!;

  const cards = [
    {
      lable: "Contratos",
      desc: "Ativos",
      value: priceFormatter.format(leases.total),
    },
    {
      lable: "Total",
      desc: "Contratos",
      value: leases.count,
    },
    {
      lable: "Ticket",
      desc: "Médio",
      value: priceFormatter.format(leases.ticket),
    },
    {
      lable: "Renovações",
      desc: "Mês",
      value: leases.count_renew,
    },
    {
      lable: "Reajustes",
      desc: "Mês",
      value: leases.count_readjustment,
    },
    {
      lable: "Inadimplência",
      desc: "+45 dias",
      value: priceFormatter.format(invoices.total_pending),
    },
  ];

  return (
    <div className="container py-3 pl-3  justify-between gap-6 flex flex-row">
      {cards.map((item) => {
        return (
          <Card
            className="w-[200px]"
            decoration="top" decorationColor="indigo"
            key={item.lable}
          >
            <header className="flex  flex-col items-start">
                <div className="">{item.lable}</div>
                <div className=" text-xs italic">{item.desc}</div>
            </header>

            <div className="item flex h-1/2 items-start justify-start">
              <p className="text-lg font-semibold">
                {item.value}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
