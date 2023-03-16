import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 20px 0;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const NameWrapper = styled.div``;

export const Name = styled.h2`
  font-size: 30px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
`;

export const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.color.primary};

  @media screen and (max-width: 480px) {
    align-self: center;
    justify-self: center;
    margin: 30px;
  }
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