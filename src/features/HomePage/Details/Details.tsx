import React, { useEffect, useState } from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import './Details.scss';
import { connect } from 'react-redux';

import Button from '../../../common/Button';
import CountryAbout from '../../../common/CountryAbout';
import { useParams } from 'react-router';
import { useGetCountry } from '../../../config/query';
import Modal from '@material-ui/core/Modal';
import CountryEdit from '../../../common/CountryEdit';
import * as countriesActions from '../../../redux/actions';
import { getSetCountry } from '../../../apollo/cache';
import MapGoogle from './Map/index';
import { Neighbors } from './Neighbors/Neighbors';

interface Props {
	history: Function;
}

const useStyles = makeStyles(() => ({
	cardModal: {
		top: '50%',
		left: '50%',
		outline: '0',
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
	},
}));

export const Details = ({ history }: any) => {

	const { name }: any = useParams() || '';
	const { loading, data } = useGetCountry(name);
	const classes = useStyles();
	const [isEdit, setIsEdit] = useState(false);
	const [result, setResult] = useState(!!data ? data.Country[0] : {});
	getSetCountry(result);

	useEffect(() => {
		if (data) {
			setResult(data.Country[0]);
		}
	}, [data]);

	const enableEdit = () => {
		setIsEdit(true);
	};

	const disableEdit = () => {
		setIsEdit(false);
	};

	const submitEditForm = (values: any) => {
		setIsEdit(false);
		setResult(values);
	};

	return (
		<React.Suspense fallback={<CircularProgress />}>
			<Modal
				open={isEdit}
				onClose={disableEdit}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<div className={classes.cardModal}>
					{!!data && <CountryEdit onCancel={disableEdit} onSubmit={submitEditForm} />}
				</div>
			</Modal>

			<div className={`countries-details`}>

				<div className={`titlePage`}>
					Detalhes 
				</div>
				{!loading && <div className={`subTitlePage spacingTitleContaner`}>
					{result.name || data.Country[0].name || ''}
				</div>}
				<div className={`details-button`}>
					<div className={`button-container`}>
						<Button
							obj={{ text: 'Voltar', type: 'tertiary' }}
							style={{ lineHeight: '35px' }}
							onClick={() => history.goBack()}
						/>
					</div>
				</div>
				{loading && <div className={`loading`} />}

				{!loading && <CountryAbout country={result || data.Country[0]} onEdit={enableEdit} />}

				{!loading && <div className={`countries-maps`}>
					<MapGoogle
						center={result.location ? result.location : data.Country ? data.Country[0].location : { latitude: 0, longitude: 0 }}
					/>
				</div>}

				{!loading && <Neighbors neighbors={result.distanceToOtherCountries || []} />}

			</div>
		</React.Suspense>
	);
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = () => ({ ...countriesActions, });

export default connect(mapStateToProps, mapDispatchToProps)(Details);



