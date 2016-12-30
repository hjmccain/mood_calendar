import React from 'react';

class EditMenu extends React.Component {
	constructor(props) {
		super(props);
		this.selectionData = this.selectionData.bind(this);
	}

	selectionData(e) {
		e.preventDefault();
		if (this.selection.value === 'delete') {
			//
			this.props.deleteEntry(this.props.id);
			console.log('edit_menu dropdown selection is DELETE --', this.selection.value);
		} else if (this.selection.value === 'edit') {
			console.log('edit_menu dropdown selection is EDIT --', this.selection.value);
		}
	}

	render() {
		return (
			<form id={this.props.id} onBlur={this.selectionData}>
				<select ref={input => this.selection = input}>
					<option value="...">...</option>
					<option value="edit">Edit</option>
					<option value="delete">Delete</option>
				</select>
			</form>
		)
	}

}

export default EditMenu;
