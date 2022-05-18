/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { selectAuth } from '../slices/myReducer/mySlice';

/*
// Essa é uma opção diferente para rotas privadas (com children)

interface MyRouteProps {
  children: ReactElement;
}

export function PrivateRouteWithChildren({ children }: MyRouteProps): JSX.Element {
  const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to="/" />;
}
*/

export function PrivateRoute() {
  const auth = useAppSelector(selectAuth);
  return auth ? <Outlet /> : <Navigate to="/" />;
}
