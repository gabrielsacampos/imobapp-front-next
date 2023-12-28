"use client";

import { ChevronsLeft, Menu, Moon } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import { UserButton } from "@clerk/nextjs";


export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="justify-end flex">
      <Sidebar opened={isMenuOpen} />
      <header
        className={`flex  justify-between items-center bg-indigo-600 border-b  dark:bg-gray-800 px-8 py-3 top-0 border-white/10 right-0 left-0 fixed  z-10 h-14 ${
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

      <UserButton />
      </header>

    </div>
  );
}
