import React from 'react';
import { hashHistory } from 'react-router';
import HeaderBar from './header_bar';
import MoodDropDown from './mood_drop_down';
import TextArea from './textarea';
import EntrySubmission from './entry_submission';
import HomePageBtn from './home_page_btn';

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
		const { textInput, moodInput } = this.state;
		if (!textInput) {
			alert('You didn\'t write anything! Jot down some feelings, or you can cancel.')
		} else if (!moodInput) {
			alert('How are you feeling? Choose a mood, then try submitting again.')
		} else {
			console.log(this.props);
			this.props.postNewEntry(textInput, moodInput);
			hashHistory.push('/confirmation');
		}
	}

	getInput(input) { this.setState({ textInput: input }) }
	getMood(mood) { this.setState({ moodInput: mood }) }

	render () {
		return (
		<div>
			<HeaderBar />
			<div className={'entry-form'}>
				<form onSubmit={this.sendAddData}>
						<div className="new-entry-top">
							<MoodDropDown getMood={this.getMood} dropText={'Select mood'} />
						</div>
					<br />
					<TextArea default={''} getInput={this.getInput} />
					<br />
					<EntrySubmission />
				</form>
				<HomePageBtn text={'Cancel'} />
			</div>
		</div>
		)
	}
}

export default NewEntryForm;
