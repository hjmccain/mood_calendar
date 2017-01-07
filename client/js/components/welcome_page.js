import React from 'react';
import { Link } from 'react-router';

function WelcomePage () {
	return (
		<div>
			<h3>Welcome!</h3>
			<button><Link to={'/entries'}>Enter</Link></button>
		</div>
	)
}

export default WelcomePage;
