import {
  SidebarItem,
  SIDEBAR_ITEMS,
} from "@/constants/SIDEBAR_ITEMS/SIDEBAR_ITEMS";
import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Sidebar() {
  return (
    <aside className=" bg-gray-800 p-6 drop-shadow-2xl border-r border-white/10 fixed left-0 top-0 bottom-0 w-48 hidden lg:block">
      <Logo />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4 pl-2">
          <strong className="text-indigo-400 text-sm"> Dashboard </strong>

          <div className="flex flex-col">
            {SIDEBAR_ITEMS.map((item) => {
              return <NavLink key={item.lable} href={item.path}>{item.lable}</NavLink>;
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
}
