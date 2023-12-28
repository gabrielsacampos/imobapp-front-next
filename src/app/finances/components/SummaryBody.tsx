import { RefreshIcon, CheckCircleIcon, CurrencyDollarIcon, ArrowSmRightIcon, ExclamationCircleIcon, TrendingUpIcon } from "@heroicons/react/outline";
import { Button, Badge, Text, Card, Metric } from "@tremor/react";
import { NFSCards } from "./NFSCards";
import { SummaryCards } from "./SummaryCards";


export function Summary(){
  return (
    <div className="mt-2 flex flex-col gap-5">
      <Card className="flex flex-col gap-2">
      <Text>Último intervalo de fechamento: <span className="text-green-700 italic">01/01/2023 a 31/12/2023</span></Text>
      <Text >Sugestão para fechamento atual: <span className="text-gray-700 italic">01/01/2023 a 31/12/2023</span> </Text>
      <Button icon={RefreshIcon} className="self-center sm:self-start border-4 h-6 max-w-[200px] ml-2"> Gerar neste período</Button>
      </Card>

      
      <Text className="mt-5 border-b border-gray-600/10 text-center text-xl">Resumo Geral para Fechamento</Text>
        
       <SummaryCards />
       

    </div>
  )
}