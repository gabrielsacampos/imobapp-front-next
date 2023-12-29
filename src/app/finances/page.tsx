"use client"

import Header from "@/components/Header"
import { Heading } from "@radix-ui/themes"
import { NFSTablesTabs } from "./components/NFSTablesTabs"
import { TopCards } from "./components/TopCards"
import { TopInfo } from "./components/TopInfo"
import { Title } from "@tremor/react"


export default function Page(){
    return (
        <div>
            <Header />


            <Title className="text-xl">Fechamento de mês</Title>
            <Title className="text-xs font-extralight">e emissão de <span className=" border-b dark:border-white/10 border-zinc-900/10">notas fiscais</span></Title>
            
            


            <div className="mb-10">
            <TopInfo />
            </div>
    
        

            <Title>Resumo</Title>
            <div className="mb-10 mt-5">
                <TopCards />
            </div>
            
        
        
            <Title>Notas Fiscais</Title>
            <NFSTablesTabs />
        </div>
    
    )
}