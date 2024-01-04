import Image from "next/image";

export function Pernambuco(){
    return(
        <div>
            <Image className="object-cover rounded-sm" crossOrigin="anonymous" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/1920px-Bandeira_de_Pernambuco.svg.png" alt="Pernambuco Flag" width={20} height={6}/>
        </div>
    
    )
}