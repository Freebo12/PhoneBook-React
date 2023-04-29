import styled from '@emotion/styled';

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 5px solid #2a363b;
  background-image: linear-gradient(
    to right,
    #a7be8e 0%,
    #067988 51%,
    #32264e 100%
  );
`;

export const RegisterBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const NavLinkStyled = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  :active {
    color: #e84a5f;
  }
`;

export const BtnHeader = styled.button`
  border-color: gray;
  width: 160px;
  text-decoration: none;
  display: inline-block;
  color: white;
  font-weight: 900;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #a7be8e 0%,
    #067988 51%,
    #32264e 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  :hover {
    background-position: right center;
    color: red;
  }
`;

export const BtnHome = styled.button`
  border-color: gray;
  width: 120px;
  text-decoration: none;
  display: inline-block;
  color: white;
  font-weight: 900;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #a7be8e 0%,
    #067988 51%,
    #32264e 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  :hover {
    background-position: right center;
    color: red;
  }
`;

export const BtnLogOut = styled.button`
  border-color: gray;
  width: 160px;
  text-decoration: none;
  display: inline-block;
  color: white;
  font-weight: 900;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #a7be8e 0%,
    #067988 51%,
    #32264e 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  :hover {
    background-position: right center;
    color: red;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  align-content: center;
`;

export const TitleWelcome = styled.h3`
  color: white;
`;

export const UserEmail = styled.span`
  color: orangered;
`;
