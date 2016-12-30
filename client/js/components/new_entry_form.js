import React from 'react';
import MoodDropDown from './mood_drop_down';
import TextArea from './textarea';
import NewEntrySubmission from './new_entry_submission';

class NewEntryForm extends React.Component {
	constructor() {
		super();
		this.sendAddData = this.sendAddData.bind(this);
		this.getInput = this.getInput.bind(this);
	}

	sendAddData(e) {
		e.preventDefault();
		console.log('new entry form onsubmit')
		
	}

	getInput(input) {
		console.log('new entry form callback with input', input);
	}

	render () {
		return (
			<form onSubmit={this.sendAddData}>
				<MoodDropDown />
				<br />
				<TextArea getInput={this.getInput}/>
				<br />
				<NewEntrySubmission />
			</form>
		)
	}
}

export default NewEntryForm;
