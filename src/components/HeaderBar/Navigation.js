import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';
import { NavElem } from './HeaderBar.styled';

const StyledLink = styled(NavLink)`
  color: black;
  width: 130px;
  height: 40px;
  font-weight: 800;
  transition: 400ms;
  padding-top: 30px;
  padding-bottom: 50px;
  :hover {
    color: orangered;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavElem>
      <StyledLink to="/">Home</StyledLink>

      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </NavElem>
  );
};
