import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { RegisterPage } from 'Pages/RegisterPage';
import { LogInPage } from 'Pages/LoginPage';
import { Layout } from './Layout';
import { PageNotFound } from 'Pages/NotFoundPage';
import { refreshUser } from './Redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoutes';
import { PrivateRoute } from './PrivateRoutes';
import { ContactsPage } from '../Pages/ContactsPage';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div> loading...</div>
  ) : (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/register"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LogInPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
