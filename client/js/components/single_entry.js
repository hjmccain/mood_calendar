import React from 'react';

function SingleEntry (props) {

	return (
		<li>
			<h3>{props.mood}</h3>
			<p>{props.text}</p>
			<p>{props.date}</p>
		</li>
	)

}

export default SingleEntry;
