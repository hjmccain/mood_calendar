import React from 'react';
import TextArea from './textarea';
import MoodDropDown from './mood_drop_down';
import EntrySubmission from './entry_submission';

class EditEntryForm extends React.Component {
	constructor(props) {
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
		this.props.editEntry(this.props.params.id, this.state.textInput, this.state.moodInput);
	}

	getInput(input) {
		this.setState({ textInput: input });
	}

	getMood(mood) {
		this.setState({ moodInput: mood });
	}

	render () {
		console.log(this.props);
		const selectedEntry = this.props.entries.filter((entry) => {
			return entry.id.toString() === this.props.params.id;
		});

		return (
			<form onSubmit={this.sendEditData}>
				<MoodDropDown selectedMood={selectedEntry[0].mood}
					getMood={this.getMood} dropText={'Select mood'} />
				<br />
				<TextArea default={selectedEntry[0].text}
					getInput={this.getInput}/>
				<br />
				<EntrySubmission />
			</form>
		)
	}
}

export default EditEntryForm;
