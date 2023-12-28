"use client"

import { Summary } from "./components/Summary"
import { TableAvailableProperties } from "./components/Tables"


export default function Page(){
    return (
        <div>
            <header className="border-b border-zinc-900/30">
                <h1 className="text-xl font-semibold">Fechamento de mês</h1>
                <h2 className="text-md italic">Notas fiscais</h2>
            </header>
        
        <div className="overflow-x-auto">
        <Summary />
        </div>
        

        <TableAvailableProperties />
        </div>
    
    )
}