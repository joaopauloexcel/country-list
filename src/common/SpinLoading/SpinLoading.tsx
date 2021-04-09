import React from 'react';
import { CircularProgress } from '@material-ui/core';

import './SpinLoading.scss';

export const SpinLoading = () => (
	<div className="spin-loading-wrapper" data-testid="spin-loading-field">
		<CircularProgress />
	</div>
);
