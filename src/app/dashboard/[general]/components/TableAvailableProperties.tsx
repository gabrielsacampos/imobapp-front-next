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

import { Loader } from "@/components/Loader";
import { api } from "@/lib/axios";
import { BadgeError } from "@/components/BadgeError";

export type AvailablePropertiesProps = {
  building: string;
  unity: string;
  block: string;
  rooms: number;
  rentalValue: number;
};

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("building", {
    header: "Empreedimento",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("unity", {
    header: "Unidade",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("block", {
    header: "Bloco/Torre",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("rooms", {
    header: "Quartos",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("rentalValue", {
    header: "Valor de Aluguel",
    cell: (info) => info.getValue(),
  }),
];

export function TableAvailableProperties() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["tables-general"],
    queryFn: () =>
      api.get("/dashboard/tables").then((r) => {
        const { availableProperties } = r.data;
        return availableProperties;
      }),
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    const message = `Erro ao carregar dados. Por favor, contate o desenvolvedor - Error messsage: ${error.message}`;
    return <BadgeError errorMessage={message} />;
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
