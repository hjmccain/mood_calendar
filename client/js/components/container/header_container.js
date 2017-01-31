import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/entries_actions';
import MoodDropDown from '../presentational/mood_drop_down';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		selectMood: (mood) => { dispatch(actions.selectMood(mood)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodDropDown);
