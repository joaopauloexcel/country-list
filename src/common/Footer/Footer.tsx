import React from 'react';

import './Footer.scss';

export const Footer = () => (
	<footer id="footer-web" data-testid="footer-field">
		&copy;{new Date().getFullYear()} by - My Linkedin{' '}
		<a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-silva-91593a149/" target="_blank" rel="noopener noreferrer">
			Click Here
		</a>
	</footer>
);
