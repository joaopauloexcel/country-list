import * as React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgress } from '@material-ui/core';

interface Props {
	obj?: any;
	onClick?: any;
	style?: any;
	className?: any;
	width?: string;
	height?: string;
	disabled?: boolean;
}

export const Button = ({
	obj,
	onClick,
	style,
	width = '175px',
	height = '50px',
	className,
	disabled = false
}: Props): JSX.Element => {

	// const styleDisable
	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div
				style={{ ...(style || { lineHeight: height, width: width }), ...(disabled && { cursor: 'normal', opacity: '0.5' }) }}
				className={`button-default ${obj && obj.type === 'tertiary'
						? 'button-tertiary'
						: obj && obj.type === 'secundary'
							? 'button-secundary'
							: 'button-primary'
					} ${className}`}
				onClick={!disabled ? onClick : undefined}
				data-testid="button-field"
			>
				{obj ? (
					<span>
						{obj.icon ? (
							<img alt="image5" src={obj.icon} />
						) : obj.iconType === 'fav' ? (
							<FontAwesomeIcon icon={obj.icon} />
						) : (
							''
						)}
						{obj.icon && obj.text ? (
							<span className={'button-space-text'}>
								{obj.text}
							</span>
						) : obj.text ? (
							obj.text
						) : (
							''
						)}
					</span>
				) : (
					''
				)}
			</div>
		</React.Suspense>
	);
};

export default Button;
