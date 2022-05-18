// import PrivateRoute from './PrivateRoute';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Home from '../Pages/Home';
import { PrivateRoute } from './MyPrivateRoute';

const AllRoutes = () => (
  // <Router history={history}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } />
      {
        /**
          Esta é uma segunda opção para rotas privadas (com children)

          <Route path="/dashboard" element={
            <PrivateRouteWithChildren>
              <Dashboard />
            </PrivateRouteWithChildren>
           }/>
        */
      }

      <Route path="/dashboard" element={ <PrivateRoute /> }>
        <Route path="" element={ <Dashboard /> } />
      </Route>

    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
