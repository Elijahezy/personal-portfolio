import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NameWrapper = styled.div``;

export const Name = styled.h2`

`;

export const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ProfileWrapper = styled.div`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 481px) {
    width: 60px;
    height: 60px;
  }
`;

export const Text = styled.p`
  margin: 20px 0 40px 0;
`;