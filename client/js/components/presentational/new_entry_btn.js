import React from 'react';
import { hashHistory } from 'react-router';

function NewEntryBtn () {
	function routeLink() {
		hashHistory.push('/new_entry');
	}

	return <form className={'new-entry-form'}>
						<button className={'new-entry-btn'} type="submit" onClick={routeLink}>
							New Entry
						</button>
					</form>
}

export default NewEntryBtn;
