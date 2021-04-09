import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Neighbors.scss';
import { connect } from 'react-redux';
import * as countriesActions from '../../../../redux/actions';


interface Props {
	neighbors: any;
}

export const Neighbors = ({ neighbors }: any): any => {

	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div className={`countries-neighbors-title`}>
				Os 5 países mais próximos:
			</div>
			<div className={`countries-neighbors`} data-testid="neighbors-field">
				{!!neighbors && neighbors.map((item: any, index: any) => (
					<div key={index} className={`neighbors-item`}>
						<div className={`item-label`}>{item.countryName}</div>
						<div className={`item-value`}>
							<span>
								Distância:
							</span>
							{Math.trunc(item.distanceInKm)} Km
						</div>
					</div>
				))}
			</div>
		</React.Suspense>
	);
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = () => ({ ...countriesActions, });

export default connect(mapStateToProps, mapDispatchToProps)(Neighbors);



