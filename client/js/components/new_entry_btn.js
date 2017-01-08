import React from 'react';
import {Link} from 'react-router';

function NewEntryBtn () {
	return <form>
						<button className={'new-entry-btn'} type="submit">
							<Link className={'router-link'} to={'/new_entry'}>New Entry</Link>
						</button>
					</form>
}

export default NewEntryBtn;
