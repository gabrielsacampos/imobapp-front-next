import { TokensIcon } from "@radix-ui/react-icons";
import { Theme, Button } from "@radix-ui/themes";
import { LogInIcon } from "lucide-react";


export function Intro(){
    return( 
    <section className="flex h-[500px] justify-center items-center gap-12 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        
        <div className="flex max-w-5xl  items-center gap-8">
            <div className="w-1/2 flex justify-end">
                <Theme>
                <div className='flex flex-col gap-2 max-w-[120px]'>
                    <Button variant='soft' className='hover:bg-white'>Log In <LogInIcon size={15}/></Button>
                    <Button>Playground <TokensIcon /> </Button>
                </div>
                </Theme>
            </div>

            <div className="flex w-1/2 flex-col">
                <ul className="text-4xl tracking-tighter">
                    <li className="font-bold text-white">Simples</li>
                    <li className="font-bold text-white">Eficiente</li>
                    <li className="font-bold text-white">Intuitivo</li>
                </ul>
                <div className="mt-2 h-2 w-40 rounded-full bg-white/10"></div>
            </div>
        </div>
    </section>
    )
}