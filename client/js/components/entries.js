import React from 'react';
import Entry from './entry';

const Entries = (props) => {

	if (!props.error.error_info) {
		if (!props.entries) {
			return <div>Loading...</div>
		} else {
			return (
				<ul>{props.entries.map((entry) =>
						<Entry
							key={entry.id}
							entry={entry}
							onMouseOver={() => props.onEntryMouseOver(entry.id)}
							onMouseOut={() => props.onEntryMouseOut()}
							/>
					)}
				</ul>
			)}
	} else {
		return <div>Error: {props.error.error_info.message}</div>
	}
}

export default Entries;
