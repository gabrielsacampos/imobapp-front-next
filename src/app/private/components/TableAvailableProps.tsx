import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "./ui/table";

const invoices = [
  {
    building: "Eko Home Club",
    block: "Ipe",
    unity: "302",
    rooms: 3,
    value: 400,
  },
  {
    building: "Eko Home Club",
    block: "Ipe",
    unity: "302",
    rooms: 3,
    value: 400,
  },
  {
    building: "Eko Home Club",
    block: "Ipe",
    unity: "302",
    rooms: 3,
    value: 400,
  },
  {
    building: "Eko Home Club",
    block: "Ipe",
    unity: "302",
    rooms: 3,
    value: 400,
  },
  {
    building: "Eko Home Club",
    block: "Ipe",
    unity: "302",
    rooms: 3,
    value: 400,
  },
  {
    building: "Eko Home Club",
    block: "Ipe",
    unity: "302",
    rooms: 3,
    value: 400,
  },
  {
    building: "Eko Home Club",
    block: "Ipe",
    unity: "302",
    rooms: 3,
    value: 400,
  },
];

export function TableAvailableProps() {
  return (
    <div className="border border-white/10 rounded-lg py-3 bg-gray-800 w-auto h-auto mb-3 lg:w-1/2">
      <div className="flex border border-t-0 border-white/10 gap-5 justify-center">
        <div className="text-zinc-400 font-bold pb-2">Imóveis Disponíveis</div>
        <div className="border-l-2 border-white/10 px-3 text-green-400">3</div>
      </div>
      <Table className="p-2">
        <TableCaption>Esses são os únicos imóvies disponíveis</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="px-1">Empreendimento</TableHead>
            <TableHead className="px-1">Torre</TableHead>
            <TableHead className="px-1">Unidade</TableHead>
            <TableHead className="px-1">Quartos</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs text-zinc-200">
          {invoices.map((invoice) => (
            <TableRow key={invoice.unity} className=" h-4">
              <TableCell className=" p-2">{invoice.building}</TableCell>
              <TableCell className=" p-2">{invoice.block}</TableCell>
              <TableCell className=" p-2">{invoice.unity}</TableCell>
              <TableCell className=" p-2">{invoice.rooms}</TableCell>
              <TableCell className="flex justify-end text-right p-2 ">
                {invoice.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
}
