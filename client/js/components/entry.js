import React from 'react';

function Entry (props) {

	return (
		<li id={props.id}
				onClick={props.onClick} >
			<h3>{props.entry.mood}</h3>
			<p>{props.entry.text}</p>
			<p>{props.entry.date}</p>
		</li>
	)

}

export default Entry;
