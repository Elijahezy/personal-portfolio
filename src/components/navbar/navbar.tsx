import * as S from './navbar.styled'
import {Icon} from "@chakra-ui/icon";
import {
    EARTH_AMERICA_PATH,
    GITHUB_PATH,
    GITHUB_SOURCE_URL,
    HAMBURGER_BARS_PATH,
} from "@/components/consts";
import {useBearStore} from "@/store/store";
import React, {useState} from "react";
import {AnimatePresence, motion} from 'framer-motion'
import {SunIcon, MoonIcon} from '@chakra-ui/icons'


export default function Navbar() {
    const currentThemeBoolean = useBearStore((state) => state.themeBoolean)
    const [isHamburgerMenuDisplayed, setHamburgerMenuDisplayed] = useState(false)
    // @ts-ignore
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

            <S.ThemeSwitcherWrapper>
                <AnimatePresence mode={'wait'} initial={false}>
                    <motion.div
                        style={{display: 'inline-block', padding: '10px'}}
                        key={currentThemeBoolean ? 'light' : 'dark'}
                        initial={{y: -20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: 20, opacity: 0}}
                        transition={{duration: 0.2}}
                    >
                        <S.ThemeSwitcher bg={currentThemeBoolean ? '#FBD38D' : 'purple'}
                                         onClick={() => useBearStore.getState().switchTheme(!currentThemeBoolean)}>
                            {
                                currentThemeBoolean ?
                                    <SunIcon/>

                                    :
                                    <MoonIcon color={'white'}/>

                            }
                        </S.ThemeSwitcher>
                    </motion.div>
                </AnimatePresence>
            </S.ThemeSwitcherWrapper>

            <S.HamburgerMenu onClick={() => setHamburgerMenuDisplayed(!isHamburgerMenuDisplayed)}>
                <Icon viewBox="0 0 448 512" color={currentThemeBoolean ? 'white' : 'black'}>
                    <path d={HAMBURGER_BARS_PATH} fill={'currentColor'}/>
                </Icon>
            </S.HamburgerMenu>
            <S.HamburgerMenuWrapper display={isHamburgerMenuDisplayed.toString()}>
                <S.HamburgerMenuItem href={'/projects'} onClick={() => setHamburgerMenuDisplayed(false)}>
                    Projects
                </S.HamburgerMenuItem>
                <S.HamburgerMenuItem href={GITHUB_SOURCE_URL} onClick={() => setHamburgerMenuDisplayed(false)}>
                    Source
                </S.HamburgerMenuItem>
            </S.HamburgerMenuWrapper>
        </S.Navbar>
    )
}