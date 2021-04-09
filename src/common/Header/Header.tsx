import * as React from 'react';
import './Header.scss';
import { HOME_PAGE } from '../../routes';

interface Props {
	history?: any;
}

export const Header = ({ history }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<header data-testid="header-field">
				<div
					className="img-logo-wrapper"
					onClick={() => history.push(HOME_PAGE)}
					style={{ cursor: 'pointer' }}
				>
				</div>
				<div className="right-header" />
			</header>
		</React.Fragment>
	);
};
