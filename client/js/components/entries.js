import React from 'react';
import Entry from './entry';

const Entries = (props) => {
	let selectedEntries;

	if ((props.selectedMood === 'mood') || (!props.selectedMood)) {
		selectedEntries = props.entries
	} else {
		selectedEntries = props.entries.filter((entry) => {
			return (entry.mood === props.selectedMood);
		});
	}

	if (!props.error.error_info) {
		if (!props.entries) {
			return <div>Loading...</div>
		} else {
			console.log(selectedEntries);
			selectedEntries = selectedEntries.sort((a, b) => {
				a = a.date;
				b = b.date;
				return a > b ? -1 : a < b ? 1 : 0;
			});
			return (
				<ul>{selectedEntries.map((entry) =>
						<Entry key={entry.id} entry={entry} /> )}
				</ul>
			)}
	} else {
		return <div>Error: {props.error.error_info.message}</div>
	}
}

export default Entries;
