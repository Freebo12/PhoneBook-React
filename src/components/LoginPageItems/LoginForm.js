import { logIn } from 'components/Redux/auth/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <NavLink to="/">Back</NavLink>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
