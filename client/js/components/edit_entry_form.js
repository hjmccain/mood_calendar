import React from 'react';
import { hashHistory } from 'react-router';
import TextArea from './textarea';
import MoodDropDown from './mood_drop_down';
import EntrySubmission from './entry_submission';
import HomePageBtn from './home_page_btn';

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
		const { moodInput, textInput } = this.state;
		const { entry, id, editEntry } = this.props;
		e.preventDefault();
		if (!moodInput && !textInput) {
			alert('No edits were made, but we\'ll save your original post!');
		} else if (!moodInput) {
			editEntry(id, textInput, entry.mood)
		} else if (!textInput) {
			editEntry(id, entry.text, moodInput)
		} else {
			editEntry(id, textInput, moodInput)
		}
		hashHistory.push('/confirmation');
	}

	getInput(input) { this.setState({ textInput: input }) }
	getMood(mood) { this.setState({ moodInput: mood }) }

	render () {
		return <div className={'entry-form'}>
						<form onSubmit={this.sendEditData}>
							<MoodDropDown selectedMood={this.props.entry.mood} getMood={this.getMood} dropText={'Select mood'} />
							<br />
							<TextArea default={this.props.entry.text} getInput={this.getInput}/>
							<br />
							<EntrySubmission />
						</form>
						<HomePageBtn text={'Cancel'} />
					</div>
	}
}

export default EditEntryForm;
