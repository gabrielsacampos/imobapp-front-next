import { TableSkeleton } from "@/app/components/skeletons/TableSkeleton";
import { useTables } from "@/hooks/useDashboard";
import { Badge, Table } from "@radix-ui/themes";

export function TableExpiringLeases({data}: any){
    return(
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Cod.</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Imóvel</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Quartos</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Locatário</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Aluguel Atual</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
                <Table.Body>
                        {data.map((item, index) => {
                            return(
                                <Table.Row>
                                    <Table.RowHeaderCell  key={`row-${index}`}>{item.code}</Table.RowHeaderCell>
                                    <Table.Cell>{item.building}</Table.Cell>
                                    <Table.Cell>{item.rooms}</Table.Cell>
                                    <Table.Cell>{item.tenant_name}</Table.Cell>
                                    <Table.Cell>{item.lease_value}</Table.Cell>
                                    <Table.Cell>{item.obs === 'expired'? <Badge color="red" variant="solid" className="animate-pulse">Encerrado</Badge> : <Badge color="orange" >Encerrando</Badge>}</Table.Cell>
                                </Table.Row>
                            )
                            })}
                </Table.Body>
         </Table.Root>   
    )
}