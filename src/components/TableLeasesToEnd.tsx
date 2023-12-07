import { BadgeLeasesToEnd } from "./BadgeLeasesToEnd";
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
    code: "320",
    building: "Eko Home Club",
    block: "302",
    unity: 3,
    value: 400,
    info: "some",
    hasPending: true,
  },
  {
    code: "320",
    building: "Eko Home Club",
    block: "302",
    unity: 3,
    value: 400,
    info: "some",
    hasPending: false,
  },
  {
    code: "320",
    building: "Eko Home Club",
    block: "302",
    unity: 3,
    value: 400,
    info: "some",
    hasPending: false,
  },
  {
    code: "320",
    building: "Eko Home Club",
    block: "302",
    unity: 3,
    value: 400,
    info: "some",
    hasPending: false,
  },
  {
    code: "320",
    building: "Eko Home Club",
    block: "302",
    unity: 3,
    value: 400,
    info: "some",
    hasPending: false,
  },
  {
    code: "320",
    building: "Eko Home Club",
    block: "302",
    unity: 3,
    value: 400,
    info: "some",
    hasPending: false,
  },
  {
    code: "320",
    building: "Eko Home Club",
    block: "302",
    unity: 3,
    value: 400,
    info: "some",
    hasPending: true,
  },
];

export function TableLeasesToEnd() {
  return (
    <div className="border border-white/10 rounded-lg py-3 bg-gray-800 w-auto h-auto mb-3 md:w-1/2">
      <div className="flex border border-t-0 border-white/10 gap-5 justify-center">
        <div className="text-zinc-400 font-bold pb-2">
          Contratos perto do fim
        </div>
        <div className="border-l-2 border-white/10 px-3 text-green-400">
          {" "}
          -60 dias{" "}
        </div>
      </div>
      <Table className="p-2">
        <TableCaption>Esses são os contratos que vecerão em até 60 dias</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="px-1">cod.</TableHead>
            <TableHead className="px-1">Emp.</TableHead>
            <TableHead className="px-1">Torre</TableHead>
            <TableHead className="px-1 text-center">un.</TableHead>
            <TableHead className=" text-center">Valor</TableHead>
            <TableHead className="text-center">Info</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs text-zinc-200">
          {invoices.map((invoice) => (
            <TableRow key={invoice.unity} className=" h-4">
              <TableCell className=" p-2 ">{invoice.code}</TableCell>
              <TableCell className=" p-2 whitespace-nowrap">
                {invoice.building}
              </TableCell>
              <TableCell className=" p-2">{invoice.block}</TableCell>
              <TableCell className=" p-2 text-center">
                {invoice.unity}
              </TableCell>
              <TableCell className=" p-2 text-center">
                {invoice.value}
              </TableCell>
              <TableCell className="text-right flex justify-center py-2">
                <BadgeLeasesToEnd hasPending={invoice.hasPending} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
}
