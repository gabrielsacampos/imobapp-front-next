import { Card, Metric, Text } from "@tremor/react"
import { Badge } from "@radix-ui/themes"
import {TrendingUpIcon } from "lucide-react"

const mock = [
    {
      title: "Faturas pagas no período",
      value: 120,
      badge: <Badge mt="2"> Total de R$ 350.000 </Badge>
    },
    {
      title: "Total em comissões",
      value: 120,
      badge: <Badge color="green" mt="2"> <TrendingUpIcon size={15}/> 24% </Badge>
    },
    {
      title: "Valor total de repasses",
      value: 120,
      badge: <></>
      
    }
  ]
  


export function TopCards(){
    return (
      <div className="flex flex-col sm:flex-row gap-2 w-full overflow-x-auto">
      {mock.map((item, index) => {
          return ( 
          <Card key={`card-${index}`} className="max-w-8">
              <Text>
              {item.title}
              </Text>
              <Metric>{item.value}</Metric>
              {item.badge}
          </Card>
          )
      })}
      </div>
      )
  }