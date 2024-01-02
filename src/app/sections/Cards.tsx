import { HeartHandshake, Building, Search, Lightbulb, DatabaseZap, LoaderIcon } from "lucide-react";
import {LightningBoltIcon} from '@radix-ui/react-icons';
import { Card } from "@tremor/react";


const cards = [
    {
        icon: <HeartHandshake size={45} color='gray'/>, 
        text: <div>Utilize um sistema <span className=" text-blue-300 font-bold" >amigável</span> e <span className=" text-blue-300 font-bold" >simples</span></div>
    },
    {
        icon: <Building size={45} color='gray'/>,
        text: <div> <span className="font-bold text-blue-300">Acompanhe</span> os imóvies disponíveis e seus <span className="font-bold text-blue-300">desempenhos</span></div>
    },
    {
        icon: <Search size={45} color='gray'/>,
        text: <div><span className="font-bold text-blue-300">Monitore</span> todas as <span className="font-bold text-blue-300">atividades</span> necessárias para o seu negócio</div>
    },
    {
        icon: <DatabaseZap size={45} color='gray'/>,
        text: <div><span className="font-bold text-blue-300">Visualize dados</span> que realmente importam de forma <span className="font-bold text-blue-300">fácil</span> e <span className="font-bold text-blue-300">prática</span></div>
    }, 
    {
        icon: <Lightbulb size={45} color='gray'/>,
        text: <p>Entenda a saúde do negócio e tenha <span className="font-bold text-blue-300">insights valiosos</span></p>
    },
    {
        icon: <LoaderIcon size={45} color='gray'/>,
        text: 'Muitas outras funcionalidades por vir 🚀'
    }
]


export function FunctionalitiesCards(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((item) => {
                return(
                    <Card key={item.text} decoration="bottom" className="text-wrap text-sm gap-4 w-full md:w-48 h-auto flex flex-col justify-between items-center">
                        <div>
                            {item.icon}
                        </div>
                        <div className='text-wrap text-zinc-400'> 
                            <p className="text-center leading-tigth tracking-tight">{item.text}</p>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}



export function CardsSection(){
    return(
        <section className='flex items-center justify-center bg-white py-10 h-auto'>
                <div className="max-w-4xl">
                    <FunctionalitiesCards />                    
            </div>
         </section>

    )
}