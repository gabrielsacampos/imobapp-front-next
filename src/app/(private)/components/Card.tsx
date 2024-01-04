import React from "react";

export interface CardProps {
  lable: string;
  desc: string;
  icon: any;
  value: any;
}

export function Card({ lable, desc, icon, value }: CardProps) {
  return (
    <div className="h-48 w-40 gap-6 rounded-xl border border-white/10 bg-gray-800 drop-shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-center -ml-3 -mt-3 h-16 w-16 rounded-full border border-white/10 bg-indigo-800">
        <p>{icon}</p>
      </div>

      <header>
        <div className="flex flex-col h-1/2 justify-center items-center">
          <div className="text-zinc-400">{lable}</div>
          <div className="text-zinc-500">{desc}</div>
        </div>
      </header>

      <div className="item flex h-1/2 items-center justify-center">
        <p className="text-xl font-semibold text-zinc-400 ">{value}</p>
      </div>
    </div>
  );
}
