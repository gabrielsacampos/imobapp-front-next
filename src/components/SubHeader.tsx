"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DashboardHeader() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-5xl text-white/50">Dashboard</h1>
        <div className="flex gap-1">
          
          <div className="border-l-2 border-white/10 flex p-2 w-96 items-center justify-center gap-2 text-zinc-500">
            <p>Filtre por proprietário</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
<div className="border border-t-0 border-white/10 m-3"></div>
      <p className="text-zinc-500">Aqui você tem uma visão geral do negócio.</p>
    </div>
  );
}
