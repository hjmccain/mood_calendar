import React from 'react';
import EditMenuContainer from './edit_menu_container';

function Entry (props) {

	return	<li className={'user-entry'} id={props.entry.id} onMouseOver={props.onMouseOver}>
						<EditMenuContainer id={props.entry.id} />
						<h3 className={'mood'}>{props.entry.mood}</h3>
						<p className={'text'}>{props.entry.text}</p>
						<p className={'date'}>{props.entry.date}</p>
					</li>
}

export default Entry;
