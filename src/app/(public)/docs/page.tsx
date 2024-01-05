'use client'
import { NavSideBar } from "./components/NavSideBar";

export default function Page() {
    return(
        <div className=" pt-28  self-center max-w-5xl">
            <main className="h-full w-full px-4 ">
                <h1 className="text-4xl">Header</h1>
                <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4">Por que um Sistema Imobiliário com Next.js?</h1>
    
    <p className="mb-4">
        A criação de um sistema para imobiliárias utilizando <strong>Next.js</strong> é motivada pelo desejo de otimizar o fluxo de trabalho no setor imobiliário. Next.js, uma framework de React, oferece uma série de vantagens que são particularmente benéficas para o desenvolvimento de sistemas imobiliários.
    </p>

    <h2 className="text-2xl font-bold mb-3">Automatização e Eficiência</h2>
    <p className="mb-4">
        Com Next.js, podemos criar um sistema que automatiza muitos processos manuais, economizando tempo e reduzindo erros. Isso inclui a gestão de listagens de propriedades, agendamentos de visitas, e até mesmo o processo de documentação.
    </p>

    <h2 className="text-2xl font-bold mb-3">Interface Amigável e Responsiva</h2>
    <p className="mb-4">
        A framework suporta a criação de interfaces de usuário elegantes e responsivas, garantindo que o sistema seja fácil de usar em qualquer dispositivo, o que é crucial para agentes imobiliários em constante movimento.
    </p>

    <h2 className="text-2xl font-bold mb-3">SEO Otimizado e Performance</h2>
    <p>
        Next.js é conhecido por sua performance otimizada e capacidades de SEO. Isso é essencial para empresas imobiliárias que desejam melhorar sua visibilidade online e atrair mais clientes.
    </p>

</div>
            </main>
        </div>
        
    )
}