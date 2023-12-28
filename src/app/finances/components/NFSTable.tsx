import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react"
import { BadgeCheckIcon, EyeIcon } from "lucide-react";



const mock = [ 
    {
        owner: "João da Silva",
        tenant_type: "PF",
        nfse_value: 1000,
        nfse_status: "pending",
        nfse_number: "123456",
        onlending: "3423",
        recieve: "1234",
        invoices: []
    },
    {
        owner: "Maria Souza",
        tenant_type: "PJ",
        nfse_value: 2500,
        nfse_status: "sucefull",
        nfse_number: "654321",
        onlending: "3423",
        recieve: "1234",
        invoices: []
    },
    {
        owner: "Pedro Santos",
        tenant_type: "PF",
        nfse_value: 1500,
        nfse_status: "error",
        nfse_number: "987654",
        onlending: "3423",
        recieve: "1234",
        invoices: []
    },
]

export function BadgeStatus({status}: {status: string}){
    switch (status) {
        case "pending":
            return <Badge color="yellow" className="w-24">Pendente</Badge>
        case "sucefull":
            return <Badge color="green" className="w-24">Emitida</Badge>
        case "error":
            return <Badge color="red" className="w-24 animate-pulse">Erro</Badge>
    }
}



export function NFSTable(){
        return (
        <Card>
          <Title className="flex self-center gap-3 text-blue-500">Faturas enviadas</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Valor</TableHeaderCell>
                <TableHeaderCell>Número</TableHeaderCell>
                <TableHeaderCell>Proprietário</TableHeaderCell>
                <TableHeaderCell>Locatários</TableHeaderCell>
                <TableHeaderCell>Repasse</TableHeaderCell>
                <TableHeaderCell>A Receber</TableHeaderCell>
                <TableHeaderCell>Faturas</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mock.map((item, index) => (
                <TableRow key={`row-${index}`}>
                  <TableCell>
                    <BadgeStatus status={item.nfse_status} />
                    </TableCell>
                  <TableCell>
                    <Text>{item.nfse_value}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.nfse_number}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.owner}</Text>
                  </TableCell>
                  <TableCell>
                  <Text>
                  {item.tenant_type}
                  </Text>
                  </TableCell>
                  <TableCell>
                  <Text>
                  {item.onlending}
                  </Text>
                  </TableCell>
                  <TableCell>
                  <Text>
                  {item.recieve}
                  </Text>
                  </TableCell>
                  <TableCell className="flex justify-center">
                  <Text>
                  <EyeIcon />
                  </Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>)
        }
