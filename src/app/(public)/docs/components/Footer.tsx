import Image from "next/image";

export function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center h-20 bottom-0 bg-zinc-200/10 border-t border-black/10 mx-w-4xl">
            <div className="flex flex-row items-center justify-center gap-2">
                <p className="text-xs font-light">Poudly made with 💙 and ☕️ in </p>
                <Image
                    className="object-cover rounded-sm"
                    crossOrigin="anonymous"
                    src="/../../../../../public/pernambuco-flag.png"
                    alt=""
                    width={20}
                    height={6}
                />
            </div>
            <p className="text-xs font-light">© 2023 - nebulafy.dev - All Rigths Reserved.</p>
        </footer>
    
    )
}