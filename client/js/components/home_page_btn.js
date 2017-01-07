import React from 'react';
import { Link } from 'react-router';
import RootContainer from './root_container';

function HomePageBtn (props) {
	return (
		<button><Link to='/entries'>{props.text}</Link></button>
	)
}

export default HomePageBtn;
