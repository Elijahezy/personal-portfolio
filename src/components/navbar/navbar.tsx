import * as S from './navbar.styled'
import Link from "next/link";
import {Icon} from "@chakra-ui/icon";
import {EARTH_AMERICA_PATH, GITHUB_PATH, GITHUB_SOURCE_URL, GITHUB_URL} from "@/components/consts";
import styled from 'styled-components'


export default function Navbar() {
    return (
        <S.Navbar>
            <S.NavList>
                <S.NavItem>
                    <S.Logo href={'/'}>
                        <Icon viewBox="0 0 512 512" color={'white'}>
                            <path
                                fill='currentColor'
                                d={EARTH_AMERICA_PATH}/>
                        </Icon>
                        <span>
                    Ilia Karavaev
                        </span>
                    </S.Logo>
                </S.NavItem>
                <S.NavItem>
                    <S.NavLink href={'/projects'}>
                        Projects
                    </S.NavLink>
                </S.NavItem>
                <S.NavItem>
                    <S.NavLink href={GITHUB_SOURCE_URL}>
                        <Icon viewBox="0 0 448 512" color={'pink.400'}>
                            <path
                                fill='currentColor'
                                d={GITHUB_PATH}/>
                        </Icon>
                        Source
                    </S.NavLink>
                </S.NavItem>
            </S.NavList>
        </S.Navbar>
    )
}