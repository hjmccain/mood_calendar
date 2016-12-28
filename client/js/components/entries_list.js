import React from 'react';
import SingleEntry from './single_entry';

function EntriesList (props) {

	const allEntries = props.entries;
	const list = allEntries.map((entry) => {
		return <SingleEntry
							mood={entry.mood}
							text={entry.text}
							date={entry.date}
						/>
				});

	return (
		<ul>
			{list}
		</ul>
	)

}
