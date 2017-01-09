import React from 'react';
import { hashHistory } from 'react-router';

class EditMenu extends React.Component {
	constructor(props) {
		super(props);
		this.selectionData = this.selectionData.bind(this);
	}

	selectionData(e) {
		e.preventDefault();
		const { id, getEntries, deleteEntry } = this.props;
		if (this.selection.value === 'delete') {
			deleteEntry(id);
			this.props.entries;
		} else if (this.selection.value === 'edit') {
			hashHistory.push('/entries/' + this.props.id);
		}
	}

	render() {
		return <form id={this.props.id} onChange={this.selectionData}>
							<select className={'edit-menu'} ref={input => this.selection = input}>
								<option value="...">...</option>
								<option value="edit">Edit</option>
								<option value="delete">Delete</option>
							</select>
						</form>
	}

}

export default EditMenu;
