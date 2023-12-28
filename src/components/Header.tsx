"use client";

import { Moon, Search, Menu, ChevronsLeft } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { RigthBar } from "./RigthBar";
import { SheetDemo } from "./Sheet";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <div className="justify-end flex">
      <Sidebar opened={isMenuOpen} />
      <header
        className={`flex  justify-between items-center bg-indigo-600 dark:bg-gray-800 px-8 py-3 border-b border-zinc-800/10 dark:border-white/10 right-0 left-0 fixed  z-10 h-14 ${
          isMenuOpen ? "lg:left-48" : "lg:left-0 transition delay-75"
        }`}
      >
        <div className="flex gap-5">
          <button
            className={`transition ease-in-out  text-zinc-500 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 lg:hidden`}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <ChevronsLeft /> : <Menu />}
          </button>

          <div className="mb-2">
            <Logo />
          </div>
        </div>

        <div className="flex items-center">
          <nav className="text-sm hidden items-center gap-6 lg:flex">
            <a
              className="text-zinc-100 dark:text-zinc-500 hover:text-zinc-100 transition-colors"
              href=""
            >
              {" "}
              Notas e Fechamento{" "}
            </a>
          </nav>

          <div className="flex items-center pl-6 ml-6 gap-6 border-l">
            <button className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-zinc-100 transition-colors">
              <Moon
                size={14}
                className="text-zinc-100 hover:text-zinc-900 transition-colors "
              />
            </button>

            <button className="border border-red-800 bg-red-400/10 text-red-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-red-400 transition-colors whitespace-nowrap">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* <RigthBar /> */}
    </div>
  );
}
