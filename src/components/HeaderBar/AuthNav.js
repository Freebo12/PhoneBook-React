import { NavLink } from 'react-router-dom';
import { RegisterBox } from './HeaderBar.styled';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;
  width: 130px;
  height: 40px;
  font-weight: 800;
  transition: 400ms;

  :hover {
    color: orangered;
    box-shadow: 0 0 1px hsl(20, 100%, 18%), -1px 1px 0 hsl(20, 100%, 16%),
      -2px 2px 2px -1px hsl(20, 100%, 14%), -4px 4px 2px -2px hsl(20, 100%, 12%),
      -6px 6px 3px -3px hsl(20, 100%, 10%), -8px 8px 2px -4px hsl(20, 100%, 9%),
      -10px 10px 3px -5px hsl(20, 100%, 8%),
      -12px 12px 2px -6px hsl(20, 100%, 7%),
      -14px 14px 2px -7px hsl(20, 100%, 6%),
      -15px 15px 2px -8px hsl(20, 100%, 5%),
      -15px 15px 0 -8px hsla(20, 50%, 10%, 0.25);
  }
`;

export const AuthNav = () => {
  return (
    <RegisterBox>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </RegisterBox>
  );
};
