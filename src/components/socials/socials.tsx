import {Icon} from '@chakra-ui/react'
import {
    CODEWARS_PATH,
    CODEWARS_URL,
    GITHUB_PATH,
    GITHUB_URL,
    INSTAGRAM_PATH,
    INSTAGRAM_URL,
    LINKED_PATH,
    LINKEDIN_URL
} from "@/components/consts";
import * as H from '../../styles/ui.styled';
import * as S from './socials.styled'
import {useBearStore} from "@/store/store";

export default function Socials() {
    const {theme} = useBearStore();
    return (
        <H.Container>
            <H.TitleH3 m={'40px 0 20px 0'}>On the web</H.TitleH3>
            <S.SocialLink href={LINKEDIN_URL} target="_blank">
                <Icon viewBox="0 0 448 512" color={theme === 'dark' ? 'white' : 'black'}>
                    <path
                        fill='currentColor'
                        d={LINKED_PATH}/>
                </Icon>
                LinkedIn
            </S.SocialLink>
            <S.SocialLink href={GITHUB_URL} target="_blank">
                <Icon viewBox="0 0 448 512" color={theme === 'dark' ? 'white' : 'black'}>
                    <path
                        fill='currentColor'
                        d={GITHUB_PATH}/>
                </Icon>
                GitHub
            </S.SocialLink>
            <S.SocialLink href={INSTAGRAM_URL} target="_blank">
                <Icon viewBox="0 0 448 512" color={theme === 'dark' ? 'white' : 'black'}>
                    <path
                        fill='currentColor'
                        d={INSTAGRAM_PATH}/>
                </Icon>
                Instagram
            </S.SocialLink>
            <S.SocialLink href={CODEWARS_URL} target="_blank">
                <Icon viewBox="0 0 640 512" color={theme === 'dark' ? 'white' : 'black'}>
                    <path
                        fill='currentColor'
                        d={CODEWARS_PATH}/>
                </Icon>
                Codewars
            </S.SocialLink>
        </H.Container>
    )
}