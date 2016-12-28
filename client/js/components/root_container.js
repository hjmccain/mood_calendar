import React from 'react';

import AllEntries from './all_entries';

class RootContainer extends React.Component {
	constructor() {
		super();
	}

	render () {
		return (
			<AllEntries />
		)
	}
}

export default RootContainer;
