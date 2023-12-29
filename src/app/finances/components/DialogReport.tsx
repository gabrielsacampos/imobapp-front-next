
import { Button, Dialog, Flex, Inset } from "@radix-ui/themes";
import { EyeIcon, XIcon, DownloadIcon } from "lucide-react";
import { Strong, Table, TableBody } from '@radix-ui/themes';
const mock = [
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
    }
]


export function DialogReport(){
    return(
        <Dialog.Root>
            
            <Dialog.Trigger>
            <Button><EyeIcon /></Button>
            </Dialog.Trigger>
            
            <Dialog.Content>
                <Flex gap="3" justify="end">
                    <Dialog.Close>
                    <Button variant="soft" color="gray">
                        <XIcon size={15}/>
                    </Button>
                    </Dialog.Close>
                    <Button variant="soft" color="blue">
                        <DownloadIcon size={15}/>
                    </Button>
                </Flex>
                
                <Dialog.Title>Faturas</Dialog.Title>
                <Dialog.Description>Faturas pagas no período</Dialog.Description>
    
                <Inset side="x" my="5">
                <Table.Root>
            <Table.Header>
            <Table.Row>
                <Table.RowHeaderCell>
                    <Strong>Eko Home Clube, 2021 Ipê</Strong>
                </Table.RowHeaderCell>
                <Table.Cell>Pg: 12/12/2023</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.ColumnHeaderCell>Item</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Valor</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
    
            <TableBody>
            {mock[0].items.map((item) => {
                return(
                    <Table.Row >
                        <Table.RowHeaderCell>{item.name}</Table.RowHeaderCell>
                        <Table.Cell>{item.value}</Table.Cell>
                    </Table.Row>
                
                )  
            })}

            </TableBody>
              <Table.Row className='mb-10'>
                <Table.RowHeaderCell><Strong>Repasse</Strong></Table.RowHeaderCell>
                <Table.Cell  className="text-green-500">123.900</Table.Cell>
              </Table.Row>
    
              <Table.Row className='mb-10'>
                <Table.RowHeaderCell>-</Table.RowHeaderCell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
          </Table.Root>  
                </Inset>
    
            </Dialog.Content>
        </Dialog.Root>)
    }


