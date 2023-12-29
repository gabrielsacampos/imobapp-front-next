import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";
import { DialogReport } from "./DialogReport";
import { Badge } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";



const mock = [ 
    {
        owner: "João da Silva",
        tenant_type: "PF",
        nfse_value: 1000,
        nfse_status: "pending",
        nfse_number: "123456",
        onlending: "3423",
        recieve: "1234",
        invoices: [
            {
                property: "Casa de Praia",
                payment: "12/12/2021",
                invoice_id: "1231231sfafa23",
                items: [
                    {
                        name: "Fatura 1",
                        value: 1200,
                        date: "12/12/2021",
                    },
                    {
                        name: "Fatura 2",
                        value: 1200,
                        date: "12/12/2021",
                    },
                    {
                        name: "Fatura 3",
                        value: 1200,
                        date: "12/12/2021",
                    },
                    {
                        name: "Fatura 4",
                        value: 1200,
                        date: "12/12/2021",
                    },
                    {
                        name: "Fatura 5",
                        value: 1200,
                        date: "12/12/2021",
                    },
                ]
            },
            {
                property: "casa doida",
                payment: "12/12/2021",
                invoice_id: "1231231sfafa23",
                items: [
                    {
                        name: "Fatura 1",
                        value: 1200,
                        date: "12/12/2021",
                    },
                    {
                        name: "Fatura 2",
                        value: 1200,
                        date: "12/12/2021",
                    },
                    {
                        name: "Fatura 3",
                        value: 1200,
                        date: "12/12/2021",
                    },
                    {
                        name: "Fatura 4",
                        value: 1200,
                        date: "12/12/2021",
                    },
                    {
                        name: "Fatura 5",
                        value: 1200,
                        date: "12/12/2021",
                    },
                ]
            }
        ]
    },
    {
        owner: "Maria Souza",
        tenant_type: "PJ",
        nfse_value: 2500,
        nfse_status: "sucefull",
        nfse_number: "654321",
        onlending: "3423",
        recieve: "1234",
        invoices: [{
            property: "Casa de ironia",
            payment: "12/12/2021",
            invoice_id: "1231231sfafa23",
            items: [
                {
                    name: "Fatura 1",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 2",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 3",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 4",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 5",
                    value: 1200,
                    date: "12/12/2021",
                },
            ]
        },{
            property: "Casa de legal",
            payment: "12/12/2021",
            invoice_id: "1231231sfafa23",
            items: [
                {
                    name: "Fatura 1",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 2",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 3",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 4",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 5",
                    value: 1200,
                    date: "12/12/2021",
                },
            ]
        }]
    },
    {
        owner: "Pedro Santos",
        tenant_type: "PF",
        nfse_value: 1500,
        nfse_status: "error",
        nfse_number: "987654",
        onlending: "3423",
        recieve: "1234",
        invoices: [{
            property: "Casa de Praia",
            payment: "12/12/2021",
            invoice_id: "1231231sfafa23",
            items: [
                {
                    name: "Fatura 1",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 2",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 3",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 4",
                    value: 1200,
                    date: "12/12/2021",
                },
                {
                    name: "Fatura 5",
                    value: 1200,
                    date: "12/12/2021",
                },
            ]
        }]
    },
]

export function BadgeStatus({status}: {status: string}){
    switch (status) {
        case "pending":
            return <Badge color="yellow" >Pendente</Badge>
        case "sucefull":
            return <Badge color="green" >Emitida</Badge>
        case "error":
            return <Badge color="red" highContrast={true} className="animate-pulse"> <InfoCircledIcon/> Falhou</Badge>
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
                    <DialogReport invoices={item.invoices}/>
                  </Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>)
        }
