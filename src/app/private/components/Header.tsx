"use client";

import { ChevronsLeft, Menu, Moon } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { UserButton } from "@clerk/nextjs";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";


export function Header() {
  return (
      <header
        className="flex  justify-between items-center bg-indigo-600 border-b  dark:bg-gray-800 px-8 py-3 top-0 border-white/10 right-0 left-0 fixed  z-10 h-14"
      >

      <div className="flex gap-2 text-white">
        <ChevronsLeft /> <span>Menu</span>
      </div>

        <div className="flex gap-5">
            <Logo />
        </div>

        <UserButton />
      </header>
  );
}
