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
    display: grid;
    place-items: center;

  }
`;

export const ProfileWrapper = styled.div`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 481px) {
    width: 100px;
    height: 100px;
    margin: 20px 0;
    align-self: center;
  }
`;

export const Text = styled.p`
  margin: 20px 0 40px 0;
`;