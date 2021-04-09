import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import './Coutries.scss';
import { COUNTRIES_DETAILS } from '../../../routes';
import Card from '../../../common/Card';
import { useGetCountries } from '../../../config/query';
import SearchInput from '../../../common/SearchInput';
import { prepareString } from '../../../redux/utils/strings';
import { useDebounce } from 'use-debounce/lib';
import * as countriesActions from '../../../redux/actions';

interface Props {
	history: Function;
}

export const Coutries = ({
	history
}: any) => {

	const { loading, data } = useGetCountries();
	const [searchText, setSearchText] = useState('');
	const [search] = useDebounce(searchText, 300);

	const handleChangeSearch = (value: string) => {
		setSearchText(value);
	}

	const filterCountries = (values: Array<any>, value?: string) => {
		
		if (!values) {
			return [];
		}

		if (!value) {
			return values;
		}

		const valueSearch = prepareString(value);

		// eslint-disable-next-line max-len
		return values.filter((item: any) => prepareString(item.name.toUpperCase()).includes(valueSearch.toUpperCase()) || prepareString(item.capital.toUpperCase()).includes(valueSearch.toUpperCase()));
	}

	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div className={`countries`} data-testid="countries-field">
				<div className={`titlePage`}>
					Lista de Países
				</div>
				<div className={`subTitlePage spacingTitleContaner`}>
					Completo
				</div>
				<div className={`countries-header`}>
					<SearchInput onChange={handleChangeSearch} />
				</div>
				{loading && <div className={`loading`} />}
				{!loading &&
					<Card
						results={filterCountries(!!data ? data.Country : [], search)}
						onClick={(item: any) => history.push(`${COUNTRIES_DETAILS}/${item.alpha2Code}`)}
					/>
				}
			</div>
		</React.Suspense>
	);
};

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = () => ({ ...countriesActions, });
export default connect(mapStateToProps, mapDispatchToProps)(Coutries);
