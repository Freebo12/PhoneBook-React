import { Outlet } from 'react-router-dom';
import { AppBar } from './HeaderBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
