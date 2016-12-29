import React from 'react';
import EditMenu from './edit_menu';

function Entry (props) {

	return (
		<li id={props.id}
				onMouseOver={props.onMouseOver}
				onMouseOut={props.onMouseOut} >
			<EditMenu />
			<h3>{props.entry.mood}</h3>
			<p>{props.entry.text}</p>
			<p>{props.entry.date}</p>
		</li>
	)

}

export default Entry;
