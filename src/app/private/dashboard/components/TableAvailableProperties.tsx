import { TableSkeleton } from "@/app/components/skeletons/TableSkeleton";
import { useTables } from "@/hooks/useDashboard";
import { ITables } from "@/lib/axios";
import { Table } from "@radix-ui/themes";

export function TableAvailableProperties({data}: any){
    return(
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Empreendimento</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Unidade</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Torre/Bloco</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Quartos</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Valor Aluguel</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Tempo desocupado</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map((item, index) => {
                    return(
                        <Table.Row>
                            <Table.RowHeaderCell>{item.building}</Table.RowHeaderCell>
                            <Table.Cell>{item.unity}</Table.Cell>
                            <Table.Cell>{item.block}</Table.Cell>
                            <Table.Cell>{item.rooms}</Table.Cell>
                            <Table.Cell>{item.rental_value}</Table.Cell>
                            <Table.Cell>{index}</Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table.Root>
    )
}