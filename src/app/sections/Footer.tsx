export function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center h-24 bottom-0 bg-blue-300/10 border-zinc-900/10 mx-w-4xl">
            <div className="flex flex-row items-center justify-center gap-2">
                <p className="text-xs font-light">Feito com 💙 e ☕️ em </p>
                <img className="object-cover rounded-sm" crossorigin="anonymous" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/1920px-Bandeira_de_Pernambuco.svg.png" class="svg mw-mmv-dialog-is-open" width="20" height="6"/>
            </div>
            <p className="text-xs font-light">© 2023 - nebulafy.dev - Todos os direitos reservados</p>
        </footer>
    
    )
}