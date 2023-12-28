"use client";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Card, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Table } from "@tremor/react";



export function TableComponent({available_properties, columns}: any){
    const table = useReactTable({
        available_properties,
        columns,
        getCoreRowModel: getCoreRowModel(),
      });


      console.log(table.getRowModel().rows)

      return (<Card>
        <Table>
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
        </Table>
      </Card>)
}