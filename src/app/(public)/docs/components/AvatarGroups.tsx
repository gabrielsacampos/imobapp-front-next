import Image from "next/image";
import {Avatar} from 'antd'
import amanda from '../../../../../public/amanda.jpeg'
import aninha from '../../../../../public/aninha.jpeg'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import {LinkedInLogoIcon} from '@radix-ui/react-icons'
  

const uxGroup = [
    {
        name: "Amanda Lopes",
        role: "Interaction Designer",
        linkedin: "https://www.linkedin.com/in/amanda-lopes-ux/",
        image: <Image src={amanda} alt='amanda-profile' width={200}/>
    },
    {
        name: "Ana Regina Pedrosa",
        role: "UX/UI Designerr",
        linkedin: "https://www.linkedin.com/in/ana-regina-pedrosa-a9baa7103/",
        image: <Image src={aninha} alt='amanda-profile' width={200}/>
    }
]

export function UXGroup(){
    return(
        <HoverCard openDelay={100} >
            <HoverCardTrigger>
                <Avatar.Group>
                    {uxGroup.map((item) => {
                        return(
                            <Avatar icon={item.image} key={`avatar - ${item.name}`}/>
                        )
                    })}
                </Avatar.Group>
            </HoverCardTrigger>
            <HoverCardContent side="right" className="w-auto">  
            {uxGroup.map((item) => {
                return (
                    <Card variant="ghost" key={`card - ${item.name}`}>
                        <Flex gap="3" align="center">
                            <Avatar size={64} icon={item.image}/>
                            <div className="">
                                <Text as="div" size="2" weight="bold">
                                    {item.name}
                                </Text>
                                <Text as="div" size="2" color="gray">
                                    {item.role}
                                </Text>
                                <LinkedInLogoIcon color="gray" href={item.linkedin} className="hover:cursor-pointer"/>
                            </div>
                        </Flex>
                    </Card>
                )
            })
            }
            </HoverCardContent>
        </HoverCard>
        
    )
}
