import React from 'react';
import Entry from './entry';
import NewEntryBtn from './new_entry_btn';
import MoodDropDown from './mood_drop_down';

const Entries = (props) => {
	let selectedEntries;
	const { entries, error, selectedMood } = props;
	console.log('selected mood', props.selectedMood)

	if (!error.error_info) {
		if (!entries) {
			props.getEntries();
			return <div></div>;
		} else {
			if ((selectedMood === 'mood') || (!selectedMood)) {
				selectedEntries = entries
			} else {
				selectedEntries = entries.filter((entry) => (entry.mood === selectedMood));
			}
			selectedEntries = selectedEntries.sort((a, b) => {
				a = a.date;
				b = b.date;
				return a > b ? -1 : a < b ? 1 : 0;
			});
			return 	(
				<div className={'entries-page'}>
					<div className="entries-page-menus">
						<p className='select-from'>Filter by</p>
						<MoodDropDown dropText={'All moods'} />
            <NewEntryBtn />
					</div>
					<ul className={'entries-row'}>{selectedEntries.map((entry) => <Entry key={entry.id} entry={entry} /> )} </ul>
				</div>
			)
		}
	} else {
		return <div>Error: {props.error.error_info.message}</div>
	}
}

export default Entries;
