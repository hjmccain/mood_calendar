import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/entries_actions';

class MoodDropDown extends React.Component {
	constructor(props) {
		console.log('mood drop down', props);
		super(props);
		this.sendMood = this.sendMood.bind(this);
	}

	sendMood(e) {
		this.props.selectMood(this.moodInput.value);
		this.props.getMood(this.moodInput.value);
	}

	render () {
		return <select className={'mood-menu'}
							defaultValue={this.props.selectedMood}
							onChange={this.sendMood}
							ref={mood => this.moodInput = mood}>
								<option value="mood">{this.props.dropText}</option>
								<option value="happy">Happy</option>
								<option value="excited">Excited</option>
								<option value="awkward">Awkward</option>
								<option value="ambivalent">Ambivalent</option>
								<option value="bored">Bored</option>
								<option value="sad">Sad</option>
								<option value="depressed">Depressed</option>
						</select>
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		selectMood: (mood) => { dispatch(actions.selectMood(mood)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodDropDown);

// export default MoodDropDown;
