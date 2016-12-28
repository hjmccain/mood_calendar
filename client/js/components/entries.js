import React from 'react';
import Entry from './entry';

const Entries = ({ entries, onEntryClick, error }) => {

	if (!error.error_info) {
		if (!entries) {
			return <div>Loading...</div>
		} else {
				return <ul>
					{entries.map(
						(entry) =>
							<Entry
								key={entry.id}
								entry={entry}
								onClick={() => onEntryClick(entry.id)} />
						)}
					</ul>
				}
	} else {
		return <div>Error: {error.error_info.message}</div>
	}
}

export default Entries;
