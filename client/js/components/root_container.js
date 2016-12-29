import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/entries_async_actions';
import EntriesContainer from './entries_container';

class RootContainer extends React.Component {
	constructor() {
		super();
	}

	componentDidMount () {
		this.props.dispatch(actions.getMultipleEntries());
	}

	render () {
		return (
			<EntriesContainer />
		)
	}
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
