import React, { useState } from 'react';
import './Search.scss';
import { CircularProgress } from '@material-ui/core';

const Points = require('../../assets/images/points.svg');
const Lupa = require('../../assets/images/lupa.png');

interface Props {
	style?: any,
	placeholder?: any,
	onSearchTyped?: any;
	search?: any;
}

export const Search = ({
	onSearchTyped,
	search,
	placeholder,
	style = {},
}: Props): JSX.Element => {
	const [searchState, setSearchState] = useState('');

	const fetchData = (event: any) => {

		const find = event.target.value;
		setSearchState(find);
		(find.length === 0 || find.length > 2) && search({ search: event.target.value });

		onSearchTyped && onSearchTyped(find)

	}

	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div className={'search-remote'} data-testid="search-field">
				<input
					className={'search-header'}
					style={style}
					name="search"
					type={'text'}
					value={searchState}
					placeholder={placeholder}
					onChange={fetchData}
				/>
				<img className={`icon-search`} src={Lupa} alt="image2" />
			</div>
		</React.Suspense>
	);
};
