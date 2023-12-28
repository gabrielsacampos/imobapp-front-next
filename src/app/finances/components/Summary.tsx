import { RefreshIcon, CheckCircleIcon, CurrencyDollarIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { Button, Badge } from "@tremor/react";

export function Summary(){
  return (
    <div className="mt-2">
      <header>
      <div>Último intervalo de fechamento: <span className="text-green-700 italic">01/01/2023 a 31/12/2023</span></div>
      <div >Sugestão para fechamento atual: <span className="text-gray-700 italic">01/01/2023 a 31/12/2023</span> <Button icon={RefreshIcon} className="h-6 ml-2"> Gerar neste período</Button></div>
      </header>

      <div className="mt-3 flex gap-2 overflow-x-auto">
        <div className="">
        <Badge color="green" icon={CheckCircleIcon}>Faturas pagas no período 168</Badge>
        </div>
        <div>
        <Badge icon={CurrencyDollarIcon}>Valor total das notas R$ 53.000,00</Badge>
        </div>
        <div>
        <Badge color="blue" icon={ArrowSmRightIcon}>Total a repassar R$ 287.879,00</Badge>
        </div>
      </div>
    </div>
  )
}