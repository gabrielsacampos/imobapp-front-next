import { GitHubLogoIcon } from '@radix-ui/react-icons'
import "./globals.css";
import { SignIn } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
           <div className="h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex justify-center w-screen">
  <div className="w-full max-w-7xl">
    <header className="left-0 right-0 top-0 flex h-16 items-center justify-between gap-6 backdrop-blur-lg">
      <div className="ml-5 flex flex-col">
        <span className="text-lg font-extrabold tracking-tighter text-blue-400">IMOBAPP </span>
        <div className="ml-2 text-xs text-white">⚡️ by Nebulafy</div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold tracking-tighter text-white  hover:border-white/30 hover:border-b  transition-all hover:cursor-pointer">DOCUMENTATION</span>
        <div className="mr-5 py-1 px-4 rounded-full border border-black/20 bg-black hover:bg-white hover:text-black text-white flex items-center justify-center gap-2 hover:cursor-pointer transition-colors">
          <span className='text-xs font-semibold'>source</span><GitHubLogoIcon />
        </div>
      </div>
    </header>

    <div className="flex h-full items-center gap-24">
      <div className="w-1/2 text-right">
      <SignIn />
      </div>

      <div className="flex w-1/2 flex-col">
        <div className="text-4xl tracking-tighter">
          <p className="font-bold text-white">Simples</p>
          <p></p>
          <p className="font-bold text-white">Eficiente</p>
          <p className="font-bold text-white">Intuitivo</p>
          <div>
            <div className="mt-2 h-2 w-40 rounded-full bg-black/10"></div>
          </div>
        </div>
      </div>
    </div>

    <footer className="h-10 bg-zinc-500">

    </footer>
  </div>
</div>

    </div>
  )
}
