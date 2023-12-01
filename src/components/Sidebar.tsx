import { SidebarItem, SIDEBAR_ITEMS } from "@/constants/SIDEBAR_ITEMS";

const style = (item: SidebarItem) => {
  if (item.unabled) {
    return (
      <div className="flex items-center gap-2 text-xs font-semibold hover:bg-slate-500 hover:text-gray-400 hover:opacity-60 w-full rounded-lg p-2 text-indigo-400 opacity-30">
        {item.icon}
        <div>{item.lable}</div>
      </div>
    );
  }

  return (
    <nav className="space-y-5">
      <a
        key={item.lable}
        href={item.path}
        className="flex items-center gap-2 text-xs font-semibold hover:text-zinc-100 hover:bg-indigo-500 text-indigo-400  w-full rounded-lg p-2 "
      >
        <div>{item.icon}</div>
        <div className="right-0 flex">{item.lable}</div>
      </a>
    </nav>
  );
};

export default function Sidebar() {
  return (
    <aside className="w- bg-gray-800  p-6 drop-shadow-2xl h-full hidden md:block">
      

      {SIDEBAR_ITEMS.map((item) => {
        return (style(item))
      })}

      <div className="mt-5 text-xs font-bold border border-red-600 opacity-40 hover:opacity-100 hover:bg-red-800 hover:text-white rounded-3xl  justify-center flex">
        <div className="text-zinc-200">Sair</div>
      </div>
    </aside>
  );
}
