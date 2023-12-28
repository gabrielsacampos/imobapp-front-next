import { Card, Metric, Text, Badge } from "@tremor/react"
import {TrendingUpIcon } from "lucide-react"

const mock = [
    {
      title: "Faturas pagas no período",
      value: 120,
      badge: <Badge> Total de R$ 350.000 </Badge>
    },
    {
      title: "Total em comissões",
      value: 120,
      badge: <Badge color="green" icon={TrendingUpIcon}> 24% </Badge>
    },
    {
      title: "Valor total de repasses",
      value: 120,
      badge: <></>
      
    }
  ]
  


export function SummaryCards(){
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