"use client"

import Header from "@/components/Header"
import { Text } from "@tremor/react"
import { Summary } from "./components/SummaryBody"
import { NFSBody } from "./components/NFSBody"
import { DashboardTables } from "../dashboard/[general]/components/Tables"


export default function Page(){
    return (
        <div>
            <Header />
            <header className="border-b border-zinc-900/30">
                <Text className="text-xl font-semibold">Fechamento de mês</Text>
                <Text className="text-md italic">Notas fiscais</Text>
            </header>
        <div className="overflow-x-auto">
        <Summary />
        </div>
        <NFSBody />
        </div>
    
    )
}