"use client";

import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  flexRender,
  createColumnHelper,
  getCoreRowModel,
} from "@tanstack/react-table";

import {
  Card,
  Table as TableTremor,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";

import { Loader } from "@/app/private/components/Loader";
import { api } from "@/lib/axios";
import { BadgeError } from "@/app/private/components/BadgeError";
import { useTables } from "@/hooks/useDashboard";

type BadgeProps = {
  info: string;
};
function Badge({ info }: BadgeProps) {
  const styleBadge = () => {
    if (info === "expiring") {
      return "border-yellow-500 bg-yellow-500/10 text-yellow-400";
    }
    if (info === "expired") {
      return "border-red-500 bg-red-500/10 text-red-400 animate-pulse";
    }
  };

  let infoPt: string;

  switch (info) {
    case "expiring":
      infoPt = "Encerrando";
      break
    case "expired":
      infoPt = "Encerrado";
      break
  }

  return (
    <div className={`px-2 text-xs border  rounded-md ${styleBadge()} `}>
      {infoPt!}
    </div>
  );
}

export type LeasesToEndProps = {
  code: string;
  end_at: string;
  lease_value: number;
  building: string;
  unity: string;
  block: string;
  tenant_name: string;
  obs: string;
};

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("code", {
    header: "cod.",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("end_at", {
    header: "Encerramento",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lease_value", {
    header: "Valor",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("building", {
    header: "Empreedimento",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("unity", {
    header: "Unidade",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("block", {
    header: "Blc/Torre",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("tenant_name", {
    header: "Locatário",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("obs", {
    header: "info",
    cell: (info) => {
      const cell = info.getValue();
      console.log(cell);
      return <Badge info={cell} />;
    },
  }),
];

export function TableLeasesToEnd() {
  const { data, error, isLoading } = useTables()
  const {expiring_leases} = data!;
  
  const table = useReactTable({
    expiring_leases,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Card>
      <TableTremor>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeaderCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableTremor>
    </Card>
  );
}
