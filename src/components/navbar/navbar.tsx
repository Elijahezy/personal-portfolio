import * as S from './navbar.styled'
import Link from "next/link";
import {Icon} from "@chakra-ui/icon";
import {EARTH_AMERICA_PATH, GITHUB_PATH, GITHUB_SOURCE_URL, GITHUB_URL, MOON_PATH, SUN_PATH} from "@/components/consts";
import styled from 'styled-components'
import {useBearStore} from "@/store/store";


export default function Navbar() {
    const currentThemeBoolean = useBearStore((state) => state.themeBoolean)
    return (
        <S.Navbar>
            <S.NavList>
                <S.NavItem margin={'0 20px 0 0'}>
                    <S.Logo href={'/'}>
                        <Icon viewBox="0 0 512 512" color={currentThemeBoolean ? 'white' : 'black'}>
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
                        <Icon viewBox="0 0 448 512" color={currentThemeBoolean ? 'white' : 'black'}>
                            <path
                                fill='currentColor'
                                d={GITHUB_PATH}/>
                        </Icon>
                        Source
                    </S.NavLink>
                </S.NavItem>
                <S.ThemeSwitcher bg={currentThemeBoolean ? '#FBD38D' : 'purple'}
                                 onClick={() => useBearStore.getState().switchTheme(!currentThemeBoolean)}>
                    <Icon viewBox={currentThemeBoolean ? "0 0 512 512" : "0 0 384 512"}
                          color={currentThemeBoolean ? 'black' : 'white'}>
                        <path d={currentThemeBoolean ? SUN_PATH : MOON_PATH} fill='currentColor'/>
                    </Icon>
                </S.ThemeSwitcher>
            </S.NavList>

        </S.Navbar>
    )
}