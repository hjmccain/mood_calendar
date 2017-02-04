import React from 'react';
import { hashHistory } from 'react-router';

function WelcomePage () {
	const callLink = () => {
		hashHistory.push('/entries');
	}
	return 	(
		<div className="welcome-container">
			<div className="welcome-child">
				<h3 className="welcome">Moodoo</h3>
				<button onClick={callLink} className="enter-btn">Enter</button>
			</div>
		</div>
	)
}

export default WelcomePage;
