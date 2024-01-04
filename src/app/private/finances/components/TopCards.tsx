import { Card, Metric, Text } from "@tremor/react"
import { Badge, IconButton, Tooltip } from "@radix-ui/themes"
import {TrendingUpIcon } from "lucide-react"
import { InfoCircledIcon } from "@radix-ui/react-icons"

const mock = [
    {
      title: "Creditado",
      value: 120,
      badge: <Badge> $ 350.000 </Badge>
    },
    {
      title: "Comissões",
      value: 120,
      badge: <Badge color="green"> <TrendingUpIcon size={15}/> 24% </Badge>
    },
    {
      title: "Repassar",
      value: 120,
      badge: <Tooltip content="Repasse líquido para proprietário">
      <InfoCircledIcon color="gray"/>
    </Tooltip>
    },
    {
      title: "Receber",
      value: 120,
      badge: <Tooltip content="Comissões ref. pagamentos em conta do proprietário">
                <InfoCircledIcon color="gray"/>
              </Tooltip>
    }
  ]
  


export function TopCards(){
  return (
    <div className="sm:flex-row gap-2 w-full overflow-x-auto my-10">
        <h1 className="text-2xl font-semibold text-zinc-500 pl-2">Resumo de Faturas sem Fechamento</h1>
        <div className="grid grid-cols-4 gap-3">
          {mock.map((item, index) => {
              return ( 
              <Card key={`card-${index}`} className="py-3 my-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex gap-4 justify-between items-center w-full">
                    <h1 className="font-semibold text-zinc-400">
                    {item.title}
                    </h1>
                    {item.badge}
                  </div>
                  <Metric>{item.value}</Metric>
                </div>
              </Card>
              )
          })}
        </div>
      </div>
      )
  }