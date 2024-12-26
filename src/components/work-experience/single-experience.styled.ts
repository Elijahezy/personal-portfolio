import styled from "styled-components";
import Link from "next/link";

export const ExperienceContainer = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: ${({theme}) => theme.color.text};
    padding: 20px;
    border-radius: 8px; /* Увеличенный border-radius */
    transition: background-color 0.3s ease, color 0.3s ease; /* Плавный переход */

    &:hover {
        background-color: ${({theme}) => theme.color.primaryLight};
        padding: 20px;
    }
`;
