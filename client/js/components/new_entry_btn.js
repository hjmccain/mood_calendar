import React from 'react';
import {Link} from 'react-router';

function NewEntryBtn () {
	return (
		<form>
			<button type="submit">
				<Link to={'/new_entry'}>New Entry</Link>
			</button>
		</form>
	)
}

export default NewEntryBtn;
