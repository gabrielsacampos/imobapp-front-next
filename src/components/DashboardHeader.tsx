"use client";


type DashboardHeaderProps = {
  dashboardPage?: string;
  subtitle?: string;
}

export function DashboardHeader({dashboardPage, subtitle}: DashboardHeaderProps) {
  
  return (
    <div>
      <div className="flex">
        <h1 className="font-bold  text-3xl  md:text-5xl text-gray-700 dark:text-white/50">Dashboard</h1>
        <h3 className=' ml-5 text-2xl font-thin text-white/50  flex self-center'> { dashboardPage ? ` / ${dashboardPage}` : ''}</h3>
      </div>
      <div className="border border-t-0 border-zinc-400 dark:border-white/10 my-2"></div>
      <p className="text-zinc-500">{subtitle}</p>
    </div>
  );
}
