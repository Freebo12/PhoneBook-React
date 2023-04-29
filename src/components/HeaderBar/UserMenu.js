import { logOut } from 'components/Redux/auth/operations';
import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import {
  InfoBox,
  BtnLogOut,
  TitleWelcome,
  UserEmail,
} from './HeaderBar.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());
  return (
    <InfoBox>
      <TitleWelcome>
        Welcome: <UserEmail>{user.email}</UserEmail>
      </TitleWelcome>
      <BtnLogOut type="button" onClick={handleLogOut}>
        Logout
      </BtnLogOut>
    </InfoBox>
  );
};
