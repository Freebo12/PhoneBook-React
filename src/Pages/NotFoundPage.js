import { NavLink } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <NavLink to={'/'}>Back Home</NavLink>
    </>
  );
};
