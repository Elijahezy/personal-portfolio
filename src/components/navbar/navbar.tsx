import * as S from './navbar.styled'
import {Icon} from "@chakra-ui/icon";
import {
    EARTH_AMERICA_PATH,
    GITHUB_PATH,
    GITHUB_SOURCE_URL,
    HAMBURGER_BARS_PATH,
    MOON_PATH,
    SUN_PATH
} from "@/components/consts";
import {useBearStore} from "@/store/store";
import {useState} from "react";


export default function Navbar() {
    const currentThemeBoolean = useBearStore((state) => state.themeBoolean)
    const [isHamburgerMenuDisplayed, setHamburgerMenuDisplayed] = useState(false)
    return (
        <S.Navbar>
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
            <S.NavList>
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

            </S.NavList>
            <S.ThemeSwitcher bg={currentThemeBoolean ? '#FBD38D' : 'purple'}
                             onClick={() => useBearStore.getState().switchTheme(!currentThemeBoolean)}>
                <Icon viewBox={currentThemeBoolean ? "0 0 512 512" : "0 0 384 512"}
                      color={currentThemeBoolean ? 'white' : 'white'}>
                    <path d={currentThemeBoolean ? MOON_PATH : SUN_PATH} fill='currentColor'/>

                </Icon>
            </S.ThemeSwitcher>

            <S.HamburgerMenu onClick={() => setHamburgerMenuDisplayed(!isHamburgerMenuDisplayed)}>
                <Icon viewBox="0 0 448 512" color={currentThemeBoolean ? 'white' : 'black'}>
                    <path d={HAMBURGER_BARS_PATH} fill={'currentColor'}/>
                </Icon>
            </S.HamburgerMenu>
            <S.HamburgerMenuWrapper display={isHamburgerMenuDisplayed.toString()}>
                <S.HamburgerMenuItem href={'/projects'}>
                    Projects
                </S.HamburgerMenuItem>
                <S.HamburgerMenuItem href={GITHUB_SOURCE_URL}>
                    Source
                </S.HamburgerMenuItem>
            </S.HamburgerMenuWrapper>
        </S.Navbar>
    )
}