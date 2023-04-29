import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';
import { BtnHeader, BtnHome } from './HeaderBar.styled';

const StyledLink = styled(NavLink)`
  color: black;
  width: 130px;
  height: 40px;
  font-weight: 800;
  transition: 400ms;

  :hover {
    color: orangered;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <BtnHome>
        <StyledLink to="/">Home</StyledLink>
      </BtnHome>
      {isLoggedIn && (
        <BtnHeader>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </BtnHeader>
      )}
    </nav>
  );
};
