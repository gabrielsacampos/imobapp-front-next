


export function NavSideBar(){
    return(
        <aside className=" text-zinc-400 bg-white w-64 fixed h-screen bottom-0 border-r border-black/10">


                <div className='ml-5 flex-col items-center mt-3'>
                    <div className="text-lg font-extrabold tracking-tighter text-blue-400">IMOBAPP</div>
                    <div className="ml-2 text-xs text-blue-400 ">⚡️ by Nebulafy</div>
                </div>

            <div className="flex flex-col gap-3 pl-5 mt-12">
                <nav>
                    <h1 className="pl-2 font-bold">Overview</h1>
                </nav>

                <nav>
                    <h1 className="pl-2 font-bold">Infra</h1>
                    <ul className="pl-5">
                        <li className="hover:border-l hover:border-blue-400 hover:text-blue-400 border-l border-zinc-400 pl-3">Backend</li>
                        <li className="border-l border-zinc-400 pl-3">Frontend</li>                        
                    </ul>
                </nav>

                <nav>
                    <h1 className="pl-2 font-bold">Components</h1>
                </nav>
            </div>
        </aside>
)
}