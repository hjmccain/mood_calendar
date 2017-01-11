import React from 'react';
import { Link } from 'react-router';
import RootContainer from '../container/root_container';

function HomePageBtn (props) {
	return <button className={'cancel-btn'}><Link className={'router-link'} to='/entries'>{props.text}</Link></button>
}

export default HomePageBtn;
