import { Badge, Box, Tabs } from "@radix-ui/themes";
import { TableAvailableProperties } from "./TableAvailableProperties";
import { TableExpiringLeases } from "./TableExpiringLeases";
import { useTables } from "@/hooks/useDashboard";
import { TableSkeleton } from "@/app/components/skeletons/TableSkeleton";


export function Tables(){
    const {data, isLoading, error} = useTables()

    if(isLoading){
      return <TableSkeleton />
    }
    const {available_properties: availableProps, expiring_leases: expiringLeases} = data!;
    const countAvailableProps = availableProps.length;
    const countExpiringLeases = expiringLeases.length;

    return(
        <div className="my-16">
        <p className="
            text-center text-zinc-500 font-semibold border-b-2 border-black/10 border-double
            ">Aqui você pode conferir os imóveis disponíveis e os contratos perto
            do fim.</p>
        <Tabs.Root my='4' defaultValue="availableProperties">
            <Tabs.List>
                <Tabs.Trigger className="flex gap-1" value="availableProperties">
                    Imóveis Disponíveis 
                    <Badge ml='1' color="green">{countAvailableProps}</Badge>
                </Tabs.Trigger>
                <Tabs.Trigger value="expiringLeases">
                    Contratos Perto do Fim (- 60 dias)
                    <Badge ml='1' color="orange">{countExpiringLeases}</Badge>
                </Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                <Tabs.Content value="availableProperties">
                    <TableAvailableProperties data={availableProps} />
                </Tabs.Content>
                <Tabs.Content value="expiringLeases">
                    <TableExpiringLeases data={expiringLeases}/>
                </Tabs.Content>
            </Box>
        </Tabs.Root>
        </div>
    )
}