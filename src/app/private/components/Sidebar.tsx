'use client'

import {
  SidebarItem,
  SIDEBAR_ITEMS,
} from "@/constants/SIDEBAR_ITEMS/SIDEBAR_ITEMS";
import { Menu, Search } from "lucide-react";
import Logo from "./Logo";
import NavLink from "./NavLink";

interface SideBarProps {
  opened: boolean;
}

export default function Sidebar({opened}: SideBarProps) {
  
  return (
    <aside className={`bg-indigo-600 dark:bg-gray-800  drop-shadow-2xl border-r border-white/10 left-0 top-0 bottom-0 w-48 fixed 
      ${opened? 'block fixed z-10':' hidden lg:block' }
    `}>

      <div className="p-3">
        <button className=" w-full mt-1 px-4 flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border border-white/10 hover:border-white h-8 rounded-full transition-colors">
          <Search size={14} />
          <span>Explore</span>
        </button>

        <nav className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-4 pl-2">
            <strong className="text-zinc-200 dark:text-indigo-400 text-sm"> Dashboard </strong>

            <div className="flex flex-col">
              {SIDEBAR_ITEMS.map((item) => {
                return (
                  <NavLink key={item.lable} href={item.path}>
                    {item.lable}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
