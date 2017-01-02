import React from 'react';
import TextArea from './textarea';
import MoodDropDown from './mood_drop_down';
import EntrySubmission from './entry_submission';

class EditEntryContainer extends React.Component {
	constructor(props) {
		super(props);
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
		this.props.editEntry(this.props.params.id, this.state.textInput, this.state.moodInput);
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
		const selectedEntry = this.props.entries.filter((entry) => {
			return entry.id.toString() === this.props.params.id;
		});

		return (
			<form onSubmit={this.sendAddData}>
				<MoodDropDown selectedMood={selectedEntry[0].mood}
					getMood={this.getMood} />
				<br />
				<TextArea default={selectedEntry[0].text}
					getInput={this.getInput}/>
				<br />
				<EntrySubmission />
			</form>
		)
	}
}

export default EditEntryContainer;
