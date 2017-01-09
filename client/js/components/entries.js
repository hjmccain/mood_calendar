import React from 'react';
import Entry from './entry';

const Entries = (props) => {
	let selectedEntries;
	const { entries, error, selectedMood } = props;

	if ((selectedMood === 'mood') || (!selectedMood)) {
		selectedEntries = entries
	} else {
		selectedEntries = entries.filter((entry) => (entry.mood === selectedMood));
	}

	if (!error.error_info) {
		if (!entries) {
			props.getEntries();
			return <div></div>;
		} else {
			selectedEntries = selectedEntries.sort((a, b) => {
				a = a.date;
				b = b.date;
				return a > b ? -1 : a < b ? 1 : 0;
			});
			return <ul className={'entries-container'}>{selectedEntries.map((entry) => <Entry key={entry.id} entry={entry} /> )} </ul>
		}
	} else {
		return <div>Error: {props.error.error_info.message}</div>
	}
}

export default Entries;
