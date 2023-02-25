import {Menu, MenuButton} from "@chakra-ui/menu";
import {Box} from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Box color={'white'}>
            <Menu>
                <MenuButton margin={'0 40px 0 0'}>
                    Ilia Karavaev
                </MenuButton>
                <MenuButton margin={'0 20px 0 0'}>
                    Projects
                </MenuButton>
                <MenuButton margin={'0 20px 0 0'}>
                    Source
                </MenuButton>
            </Menu>
        </Box>
    )
}