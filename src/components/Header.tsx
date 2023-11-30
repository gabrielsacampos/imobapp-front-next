import { Menu as MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <div>
      <nav className="flex bg-indigo-500 justify-between p-6 items-center">
        <a href="" className="hover:to-blue-800 border shadow-2xl">
          <MenuIcon />
        </a>
        <div>menu</div>
        <div>logout</div>
      </nav>
    </div>
  );
}
