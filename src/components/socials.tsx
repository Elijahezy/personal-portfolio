import Title from "@/components/ui/ui";
import {Button} from "@chakra-ui/react";

export default function Socials() {
    return (
        <>
            <Title>On the web</Title>
            <Button type={'button'} _hover={{bg: '#ff6b81'}} backgroundColor={'transparent'}>Instagram</Button>
        </>
    )
}