import * as S from './navbar.styled'
import Link from "next/link";
import {Icon} from "@chakra-ui/icon";
import {EARTH_AMERICA_PATH, GITHUB_PATH} from "@/components/consts";

export default function Navbar() {
    return (
        <S.Navbar>
            <S.NavList>
                <S.Logo>
                    <Icon viewBox="0 0 512 512" color={'white'}>
                        <path
                            fill='currentColor'
                            d={EARTH_AMERICA_PATH}/>
                    </Icon>
                    <Link href={'/'}>
                        Ilia Karavaev
                    </Link>
                </S.Logo>
            </S.NavList>
        </S.Navbar>
    )
}