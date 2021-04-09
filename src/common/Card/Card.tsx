import React from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import './Card.scss';
import { prepareString } from '../../redux/utils/strings';

const DetailsPNG = require('../../assets/images/details.png');

interface Props {
	results: Array<object>;
	onClick: Function;
}

export const Card = ({
	results = [],
	onClick
}: any) => {

	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div className={`card`} data-testid="card-field">
				{results && results.map((item: any, index: any) => (
					<div key={index} className={`card-container`} onClick={() => onClick(item)} >
						<div className={`flag`}>
							<div>
								<img src={item.flag.svgFile} alt="image2" />
							</div>
						</div>
						<div className={`description`}>
							<div className={`description-container`}>
								<div className={`description-title`}>{prepareString(item.name) || "-"}</div>
								<div>{prepareString(item.capital) || "-"}</div>
							</div>
						</div>
						<div className={`icon-details`}>
							<div className={`icon-container`}>
								<img src={DetailsPNG} onClick={() => onClick(item)} alt="image4" />
							</div>
						</div>
					</div>
				))}
			</div>
		</React.Suspense>
	);
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Card);
