import React from 'react';
import MoodDropDown from './mood_drop_down';
import TextArea from './textarea';
import EntrySubmission from './entry_submission';

class NewEntryForm extends React.Component {
	constructor() {
		super();
		this.state = {
			moodInput: '',
			textInput: ''
		}
		this.sendAddData = this.sendAddData.bind(this);
		this.getInput = this.getInput.bind(this);
		this.getMood = this.getMood.bind(this);
	}

	sendAddData(e) {
		e.preventDefault();
		this.props.postNewEntry(this.state.textInput, this.state.moodInput);
	}

	getInput(input) {
		this.setState({
			textInput: input
		});
	}

	getMood(mood) {
		this.setState({
			moodInput: mood
		});
	}

	render () {
		return (
			<form onSubmit={this.sendAddData}>
				<MoodDropDown getMood={this.getMood} />
				<br />
				<TextArea default={''} getInput={this.getInput} />
				<br />
				<EntrySubmission />
			</form>
		)
	}
}

export default NewEntryForm;

// TODO: get rid of container files
// TODO: rely more on router!
