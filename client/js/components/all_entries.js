import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_async_actions';
import SingleEntry from './single_entry';

class AllEntries extends React.Component {
	constructor(props) {
		console.log('(all_entries props)', props);
		super(props);
	}

	componentDidMount () {
		this.props.dispatch(actions.entryFetch());
	}

	render () {

		if (!this.props.error.error_info) {
			if (!this.props.entries) {
				return <div>Loading...</div>
			} else {
				return <div>
								{this.props.entries.map(
									(entry) =>
										<SingleEntry
											key={entry.id}
											id={entry.id}
											mood={entry.mood}
											date={entry.date}
											text={entry.text} />
									)}
							</div>
			}
		} else {
			return <div>Error: {this.props.error.error_info.message}</div>
		}

	}

}

const mapStateToProps = (state) => ({
	entries: state.entriesState.entries,
	error: state.stateInfo
});

export default connect(mapStateToProps)(AllEntries);
