import React from 'react';
import EditMenuContainer from './edit_menu_container';

function Entry (props) {

	return (
			<li id={props.entry.id} onMouseOver={props.onMouseOver}>
				<EditMenuContainer id={props.entry.id} />
				<h3>{props.entry.mood}</h3>
				<p>{props.entry.text}</p>
				<p>{props.entry.date}</p>
			</li>
	)

}

export default Entry;
