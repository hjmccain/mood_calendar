import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_async_actions';
import EntriesList from './entries_list';

class AllEntries extends React.Component {
	constructor() {
		super();
	}

	componentDidMount () {
		this.props.dispatch(actions.entryFetch());
	}

	render () {
		let entries;

		!this.props.entries ?
			entries = [] :
			entries = this.props.entries;

			console.log('all_entries.js', this.props.entries);

		return (
			<div>Placeholder</div>
		)
	}
}

const mapStateToProps = (state) => ({
	entries: state.entriesState.entries
});

export default connect(mapStateToProps)(AllEntries);
