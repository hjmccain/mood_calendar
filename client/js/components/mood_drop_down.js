import React from 'react';

class MoodDropDown extends React.Component {
	constructor(props) {
		super(props);
		this.sendMood = this.sendMood.bind(this);
	}

	sendMood(e) {
		this.props.getMood(this.moodInput.value);
	}

	render () {
		return (
			<select onChange={this.sendMood} ref={mood => this.moodInput = mood}>
				<option value="mood">Mood</option>
				<option value="happy">Happy</option>
				<option value="excited">Excited</option>
				<option value="awkward">Awkward</option>
				<option value="ambivalent">Ambivalent</option>
				<option value="bored">Bored</option>
				<option value="sad">Sad</option>
				<option value="depressed">Depressed</option>
			</select>
		)
	}
}

export default MoodDropDown;
