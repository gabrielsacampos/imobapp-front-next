import { Moon, Search, Menu } from "lucide-react";

export default function Header() {
  return (
      <header className="flex justify-between items-center bg-gray-800 px-8 py-3 border-b border-white/10 right-0 left-0 fixed lg:left-48 z-10">
      
    <button className="w-full max-w-xs flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border border-white/10 hover:border-white px-3 h-8 rounded-full transition-colors">
      <Search size={14} />
      <span>Explore</span>
      </button>

      <div className="flex items-center">
          <nav className="text-sm hidden items-center gap-6 lg:flex">
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors" href=""> Tool1 </a>
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors" href=""> tool2 </a>
            <a className="text-zinc-500 hover:text-zinc-100 transition-colors" href=""> tool3 </a>
          </nav>
        
        <div className="flex items-center pl-6 ml-6 gap-6 border-l">
          <button className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-zinc-100 transition-colors">
            <Moon size={14} className="text-zinc-100 hover:text-zinc-900 transition-colors "  />
          </button>

          <button className="border border-red-800 bg-red-400/10 text-red-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-red-400 transition-colors whitespace-nowrap">
            Sign Out
          </button>
        </div>
      </div>
        
      </header>
    
  );
}
