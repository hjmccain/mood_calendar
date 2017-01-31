import React from 'react';
import { hashHistory } from 'react-router';
import RootContainer from '../container/root_container';

function HomePageBtn (props) {

	const callLink = (e) => {
		hashHistory.push('/entries');
	}

	return (
		<button className={'cancel-btn'} onClick={callLink}>
			{props.text}
		</button>
	)
}

export default HomePageBtn;
