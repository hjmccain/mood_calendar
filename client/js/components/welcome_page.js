import React from 'react';
import { Link } from 'react-router';

function WelcomePage () {
	return 	<div className={'welcome-container'}>
						<div className={'welcome-child'}>
							<h3 className={'welcome'}>Welcome!</h3>
							<button className={'enter-btn'}><Link className={'router-link'} to={'/entries'}>Enter</Link></button>
						</div>
					</div>
}

export default WelcomePage;
