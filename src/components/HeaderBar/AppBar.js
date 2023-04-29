import { useAuth } from 'components/hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { HeaderBar } from './HeaderBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderBar>
  );
};
