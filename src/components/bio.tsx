import {Box, Container, Heading, Image, Text} from "@chakra-ui/react";
import Title from "@/components/ui/ui";

export default function Bio() {
    return (
        <Box color={'white'}>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                <Container p={0}>
                    <Heading as={'h2'} size={'lg'}>
                        Ilia Karavaev
                    </Heading>
                    <Text>
                        Dev Ninja
                    </Text>
                </Container>
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='/Ilia.jpg'
                    alt='Ilia'
                    border={'2px solid #ff6b81'}
                />

            </Box>
            <Title>About me</Title>
            <Text m={'20px 0 40px 0'}>
                I used to be a private tutor of English language. However, one day I felt like I want to do something
                more complicated. I decided to try coding courses and I felt in love with coding. I finished those
                courses and found an internship at digital agency.
                So now I{`'`}m looking for full time job in the USA at any state.
            </Text>
        </Box>
    )
}