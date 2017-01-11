import React from 'react';
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
	}

	sendMoodData(e) {
		e.preventDefault();
		this.props.selectMood(this.state.moodInput);
	}

	getMood(mood) {
		this.setState({ moodInput: mood });
	}

	render () {
		return (
			<div className={'header-bar'}>
				<h3 className={'welcome'}>Moodoo</h3>
				<MoodDropDown getMood={this.getMood} dropText={'All moods'} />
				<button className={'filter-btn'} type="submit" onClick={this.sendMoodData}>Filter</button>
				<NewEntryBtn />
			</div>
		)
	}
}

export default HeaderBar;
