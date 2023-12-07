"use client";

export function DashboardHeader() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-5xl text-white/50">Dashboard</h1>
        <div className="flex gap-1"></div>
      </div>
      <div className="border border-t-0 border-white/10 m-3"></div>
      <p className="text-zinc-500">Aqui você tem uma visão geral do negócio.</p>
    </div>
  );
}
