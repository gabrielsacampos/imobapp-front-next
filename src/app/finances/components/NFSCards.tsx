import { Card, Metric, Text } from "@tremor/react";




const mock = [ 
    {
        title: "Processadas",
        color: "blue",
        value: 5
    },
    {
        title: "Emitidas",
        color: "green",
        value: 5
    },
    {
        title: "Com Erro",
        color: "red",
        value: 5
    }
]





export function NFSCards() {
  return ( 
  <div className="mt-3 grid grid-cols-2 sm:grid-cols-3  gap-2 overflow-x-auto">
    {mock.map((item, index) => {
        return ( 
        <Card decoration="top" decorationColor={item.color} key={`card-${index}`} className="max-w-8">
            <Text>
            {item.title}
            </Text>
            <Metric color={item.color}>{item.value}</Metric>
        </Card>
        )
    })}
</div>);
}