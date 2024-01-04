"use client";

import { UserButton } from "@clerk/nextjs";
import { ChevronsLeft } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { Sidebar } from "./Sidebar";


export function Header() {
  const [sidebarOpened, setSidebarOpened] = useState(true);

console.log(sidebarOpened)
  return (
    <div>
      <header
        className="flex  justify-between items-center bg-indigo-600 border-b  px-8 py-3 top-0 border-white/10 right-0 left-0 fixed  z-10 h-14"
      >

      <button onClick={() => setSidebarOpened(!sidebarOpened)} className="flex gap-2 text-white">
        {sidebarOpened? <ChevronsLeft /> : <ChevronsLeft className='transform rotate-180 transition-transform ' />}
        <span>Menu</span>
      </button>

        <div className="flex gap-5">
            <Logo />
        </div>

        <UserButton />
      </header>

      <Sidebar opened={sidebarOpened} />

    </div>
  );
}
