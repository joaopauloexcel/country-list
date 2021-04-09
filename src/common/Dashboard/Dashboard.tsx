import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Dashboard.scss';
import { HOME_PAGE } from '../../routes';

const Header = React.lazy(() => import('../../common/Header'));
const HomePage = React.lazy(() => import('../../features/HomePage'));

export const Dashboard = (): JSX.Element => {
	return (
		<React.Suspense fallback={<CircularProgress />}>
			<Header />
			<div className="container">
				<Switch>
					<Route path={`${HOME_PAGE}`} component={HomePage}></Route>
					<Route exact path={'/'}>
						<Redirect to={`${HOME_PAGE}`} />
					</Route>
					<Redirect from="*" to={`${HOME_PAGE}`} />
				</Switch>

			</div>
		</React.Suspense>
	);
};
