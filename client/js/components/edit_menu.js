import React from 'react';
import {hashHistory} from 'react-router';

class EditMenu extends React.Component {
	constructor(props) {
		super(props);
		this.selectionData = this.selectionData.bind(this);
	}

	selectionData(e) {
		e.preventDefault();
		if (this.selection.value === 'delete') {
			this.props.deleteEntry(this.props.id);
			this.props.getEntries();
		} else if (this.selection.value === 'edit') {
			hashHistory.push('/entries/' + this.props.id);
		}
	}

	render() {
		return <form id={this.props.id} onChange={this.selectionData}>
							<select ref={input => this.selection = input}>
								<option value="...">...</option>
								<option value="edit">Edit</option>
								<option value="delete">Delete</option>
							</select>
						</form>
	}

}

export default EditMenu;
