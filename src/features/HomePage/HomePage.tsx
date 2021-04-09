import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import './HomePage.scss';
import { connect } from 'react-redux';
import { COUNTRIES_DETAILS, HOME_PAGE } from '../../routes';

const Countries = React.lazy(() => import('../../features/HomePage/Coutries'));
const Details = React.lazy(() => import('../../features/HomePage/Details'));

interface Props { }

interface State { }

class HomePageComponent extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {};

	}

	render() {
		return (
			<React.Suspense fallback={<CircularProgress />}>
				<div>
					<Switch>
						<Route exact path={`${HOME_PAGE}`} component={Countries}></Route>
						<Route exact path={`${COUNTRIES_DETAILS}/:name`} component={Details}></Route>
					</Switch>
				</div>
			</React.Suspense>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		countriesState: state.countries,
	};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
