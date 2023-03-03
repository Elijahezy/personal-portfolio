import {Heading} from "@chakra-ui/react";


type Props = {
    children: string | JSX.Element | JSX.Element[],
    m?: string,
}
export default function Title({children, m}: Props) {
    return (
        <Heading m={m} as={'h3'} size={'md'} textDecor={'underline 4px solid #ff6b81'}
                 textUnderlineOffset={'6px'}
        >{children}</Heading>
    )
}