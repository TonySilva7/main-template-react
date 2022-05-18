// import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Home from '../Pages/Home';
import MyRoutes from './MyRoutes';

const AllRoutes = () => (
	// <Router history={history}>
	<BrowserRouter>
		<Switch>
			<MyRoutes exact path='/dashboard' component={Dashboard} />
			{/* <PrivateRoute exact path='/checkout' component={Checkout} /> */}
			<Route exact path='/' component={Home} />
		</Switch>
		{/* </Router> */}
	</BrowserRouter>
);

export default AllRoutes;
