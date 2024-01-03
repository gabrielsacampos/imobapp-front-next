import Image from "next/image";
import * as pernambucoFlag from "../../../../../public/pernambuco-flag.png";

export function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center h-24 bottom-0 bg-blue-300/10 border-zinc-900/10 mx-w-4xl">
            <div className="flex flex-row items-center justify-center gap-2">
                <p className="text-xs font-light">Feito com 💙 e ☕️ em </p>
                <Image
                    className="object-cover rounded-sm"
                    crossOrigin="anonymous"
                    src={pernambucoFlag}
                    alt=""
                    width={20}
                    height={6}
                />
            </div>
            <p className="text-xs font-light">© 2023 - nebulafy.dev - Todos os direitos reservados</p>
        </footer>
    
    )
}