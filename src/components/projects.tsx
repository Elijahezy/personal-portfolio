import {Box, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import Title from "@/components/ui/ui";
import Link from "next/link";

export default function Projects() {
    return (
        <Box>

            <Title>Projects</Title>
            <Grid color={'white'} templateColumns='repeat(2, 1fr)' gap={'10px'} m={'20px 0 0 0'}
                  textAlign={'center'}>
                <GridItem display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Link href={'https://online-cinema-app-elijahezy.vercel.app/'}>

                        <Image src='/projects/wtw.png' alt='A website to watch films'
                               objectFit={'contain'} borderRadius={'10px'}/>
                        <Heading as={'h5'} fontSize={'s'} m={'10px 0 10px 0'}>What To Watch</Heading>
                        <Text fontSize={'xs'} width={'80%'}>WTW is a streaming service that offers a wide variety
                            of
                            award-winning
                            TV shows,
                            movies</Text>
                    </Link>

                </GridItem>

                <GridItem display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Image src='/projects/guitar-shop.png' alt='A website to buy a guitar'
                           objectFit={'contain'}/>
                    <Heading as={'h5'} fontSize={'s'} m={'10px 0 10px 0'}>Guitar Shop</Heading>
                    <Text fontSize={'xs'} width={'80%'}>An online shop that sells awesome guitars</Text>
                </GridItem>


            </Grid>
        </Box>
    )
}