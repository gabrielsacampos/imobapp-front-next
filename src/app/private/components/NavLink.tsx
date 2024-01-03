"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";






interface NavLinkProps {
  children: string;
  href: string;
}

export default function NavLink({ children, href }: NavLinkProps) {
  const activeHref = usePathname();

  return (
    <Link
		data-active={activeHref === href}
      className="px-4 py-1 border-l border-zinc-600/40 text-zinc-400 dark:text-zinc-600 border-zinc-600 hover:text-white transition-colors data-[active=true]:border-zinc-200 dark:data-[active=true]:border-indigo-400 data-[active=true]:text-zinc-100 dark:data-[active=true]:text-indigo-400"
      href={href}
    >
      {children}
    </Link>
  );
}
