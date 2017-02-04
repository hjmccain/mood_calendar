import React from 'react';
import { hashHistory } from 'react-router';

class EditMenu extends React.Component {
	constructor(props) {
		super(props);
		this.selectionData = this.selectionData.bind(this);
	}

	selectionData(e) {
		e.preventDefault();
		const { id, deleteEntry } = this.props;
		if (this.selection.value === 'delete') {
			deleteEntry(id);
		} else if (this.selection.value === 'edit') {
			hashHistory.push('/entries/' + this.props.id);
		}
	}

	render() {
		const selectClasses = `edit-menu ${this.props.mood}`
		return (
			<form id={this.props.id} onChange={this.selectionData} className={this.props.mood}>
				<select className={selectClasses} ref={input => this.selection = input}>
					<option value="...">...</option>
					<option value="edit">Edit</option>
					<option value="delete">Delete</option>
				</select>
			</form>
		)
	}
}

export default EditMenu;
