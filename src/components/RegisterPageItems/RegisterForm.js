import { register } from 'components/Redux/auth/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RegisterFormBox, RegisterBtn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <NavLink to="/">Back</NavLink>
      <RegisterFormBox autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <RegisterBtn type="submit">Register</RegisterBtn>
      </RegisterFormBox>
    </>
  );
};
