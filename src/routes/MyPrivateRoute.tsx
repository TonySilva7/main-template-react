/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';

/*
// Essa é uma opção para rotas privadas com children

interface MyRouteProps {
	children: ReactElement;
}

export function PrivateRouteWithChildren({ children }: MyRouteProps): JSX.Element {
	const isLoggedIn = true;

	return isLoggedIn ? children : <Navigate to="/" />;
}
*/

const useAuth = (): boolean => false;

export function PrivateRoute() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
}
