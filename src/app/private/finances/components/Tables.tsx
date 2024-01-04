import { Tabs, Box, Table, Badge } from "@radix-ui/themes";
import { DialogReport } from "./DialogReport";



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


export function Tables(){


    return(
        <div>
             <h1 className="text-2xl font-semibold text-zinc-500 pl-2">Notas Fiscais consolidadas</h1>
        <Tabs.Root defaultValue="pending">
            <Tabs.List>
                <Tabs.Trigger value="pending">Pendentes <Badge ml='2'>2</Badge></Tabs.Trigger>
                <Tabs.Trigger value="succes">Enviadas <Badge ml='2' color="green">2</Badge></Tabs.Trigger>
                <Tabs.Trigger value="error">Falhas <Badge ml='2' color="red" className="animation-pulse">2</Badge></Tabs.Trigger>
            </ Tabs.List>
            <Box px="4" pt="3" pb="2">
                <Tabs.Content value="pending">
                    <NFSTable />
                </Tabs.Content>
            </Box>
            </ Tabs.Root>
        </div>
    )
}

export function NFSTable(){
    const data = mock;
    return(
        
                    <Table.Root>
                        <Table.Header>
                            <Table.Row>
                                <Table.RowHeaderCell>Status</Table.RowHeaderCell>   
                                <Table.RowHeaderCell>Valor</Table.RowHeaderCell>
                                <Table.RowHeaderCell>Número</Table.RowHeaderCell>
                                <Table.RowHeaderCell>Proprietário</Table.RowHeaderCell>
                                <Table.RowHeaderCell>Locatários</Table.RowHeaderCell>
                                <Table.RowHeaderCell>Repasse</Table.RowHeaderCell>
                                <Table.RowHeaderCell>A Receber</Table.RowHeaderCell>
                                <Table.RowHeaderCell>Faturas</Table.RowHeaderCell>
                            </ Table.Row>
                        </Table.Header>
                            <Table.Body>
                                {data.map((item, index) => (
                                    <Table.Row key={`row-${index}`} className="hover:bg-zinc-200/10 hover:cursor-pointer">
                                        <Table.RowHeaderCell>
                                            {item.nfse_status}
                                        </Table.RowHeaderCell>
                                        <Table.Cell>
                                            {item.nfse_value}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.nfse_number}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.owner}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.tenant_type}
                        
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.onlending}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.recieve}
                                        </Table.Cell>
                                        <Table.Cell className="flex justify-center items-center">
                                            <DialogReport />
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                    </ Table.Root>
    )
}