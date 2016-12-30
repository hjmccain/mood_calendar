import React from 'react';
import MoodDropDown from './mood_drop_down';
import TextArea from './textarea';
import NewEntrySubmission from './new_entry_submission';

function NewEntryForm (props) {
	return (
		<form>
			<MoodDropDown />
			<TextArea />
			<NewEntrySubmission />
		</form>
	)
}

export default NewEntryForm;
