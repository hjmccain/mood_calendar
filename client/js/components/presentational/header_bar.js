import React from 'react';
import { hashHistory } from 'react-router';
import NewEntryBtn from './new_entry_btn';
import MoodDropDown from './mood_drop_down';

class HeaderBar extends React.Component {
	constructor() {
		super();
		this.state = {
			moodInput: ''
		}
		this.sendMoodData = this.sendMoodData.bind(this);
		this.getMood = this.getMood.bind(this);
		this.callLink = this.callLink.bind(this);
	}

	sendMoodData(e) {
		e.preventDefault();
		console.log(this.props);
		// this.props.selectMood(this.state.moodInput);
	}

	getMood(mood) {
		this.setState({ moodInput: mood });
	}

	callLink(e) {
		hashHistory.push('/');
	}

	render () {
		return (
			<div className={'header-bar'}>
				<h3 onClick={this.callLink} className={'moodoo'}>Moodoo</h3>
			</div>
		)
	}
}

export default HeaderBar;
