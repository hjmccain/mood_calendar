import React from 'react';
import { hashHistory } from 'react-router';
import TextArea from './textarea';
import MoodDropDown from './mood_drop_down';
import EntrySubmission from './entry_submission';

class EditEntryForm extends React.Component {
	constructor(props) {
		console.log(props);
		super(props);
		this.state = {
			moodInput: '',
			textInput: ''
		}
		this.sendEditData = this.sendEditData.bind(this);
		this.getInput = this.getInput.bind(this);
		this.getMood = this.getMood.bind(this);
	}

	sendEditData(e) {
		e.preventDefault();
		this.props.editEntry(this.props.id, this.state.textInput, this.state.moodInput);
		hashHistory.push('/confirmation');
	}

	getInput(input) { this.setState({ textInput: input }) }

	getMood(mood) { this.setState({ moodInput: mood }) }

	render () {
		return (
			<form onSubmit={this.sendEditData}>
				<MoodDropDown selectedMood={this.props.entry.mood}
					getMood={this.getMood} dropText={'Select mood'} />
				<br />
				<TextArea default={this.props.entry.text}
					getInput={this.getInput}/>
				<br />
				<EntrySubmission />
			</form>
		)
	}
}

export default EditEntryForm;
