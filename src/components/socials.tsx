import Title from "@/components/ui/ui";
import {Button} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from 'next/link'
import {Icon, createIcon} from '@chakra-ui/react'
import {GITHUB_PATH, GITHUB_URL, INSTAGRAM_PATH, INSTAGRAM_URL, LINKED_PATH, LINKEDIN_URL} from "@/components/consts";


const SocialLink = styled(Link)`
  background-color: transparent;
  padding: 8px 15px;
  transition: background-color 0.1s ease-in;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  width: min-content;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: rgba(255, 107, 129, 0.38);
  }
`

export default function Socials() {
    return (
        <>
            <Title m={'0 0 20px 0'}>On the web</Title>
            <SocialLink href={LINKEDIN_URL}>
                <Icon viewBox="0 0 448 512" color={'pink.400'}>
                    <path
                        fill='currentColor'
                        d={LINKED_PATH}/>
                </Icon>
                LinkedIn
            </SocialLink>
            <SocialLink href={GITHUB_URL}>
                <Icon viewBox="0 0 448 512" color={'pink.400'}>
                    <path
                        fill='currentColor'
                        d={GITHUB_PATH}/>
                </Icon>
                GitHub
            </SocialLink>
            <SocialLink href={INSTAGRAM_URL}>
                <Icon viewBox="0 0 448 512" color={'pink.400'}>
                    <path
                        fill='currentColor'
                        d={INSTAGRAM_PATH}/>
                </Icon>
                Instagram
            </SocialLink>
        </>
    )
}