import { useTables } from "@/hooks/useDashboard";
import { Card, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Table, Button } from "@tremor/react";
import { Loader, DownloadIcon, Search } from "lucide-react";




export function TableAvailableProperties(){
    const {data, isLoading, error} = useTables()
  
    if(isLoading){
      return <Loader />
    }

  
    const {available_properties: availableProps} = data!;
    return (
    <Card className="mt-5">
      <Title className="flex self-center justify-between">Notas para emissão 
      <div className="flex gap-2">
      <Button className="h-8">Emitir notas</Button> 
      <Button icon={DownloadIcon} className="h-8 w-3"/>
      <Button color="slate" icon={Search} className="h-8 w-3"/>
      </div>
        
      </Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Proprietário</TableHeaderCell>
            <TableHeaderCell>Fatura</TableHeaderCell>
            <TableHeaderCell>Comissão</TableHeaderCell>
            <TableHeaderCell>Repasse</TableHeaderCell>
            <TableHeaderCell>Retido</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {availableProps.map((item, index) => (
            <TableRow key={`row-${index}`}>
              <TableCell>{item.building}</TableCell>
              <TableCell>
                <Text>{item.unity}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.block}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.rooms}</Text>
              </TableCell>
              <TableCell>
              <Text>
              {item.rental_value}
              </Text>
              </TableCell>
              <TableCell>
              <DownloadIcon size={15}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>)
  }