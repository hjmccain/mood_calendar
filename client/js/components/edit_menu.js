import React from 'react';

class EditMenu extends React.Component {
	constructor(props) {
		super(props);
		this.selectionData = this.selectionData.bind(this);
	}

	selectionData(e) {
		e.preventDefault();
		if (this.selection.value === 'delete') {
			this.props.deleteEntry();
			console.log('edit_menu dropdown selection is DELETE --', this.selection.value);
		} else if (this.selection.value === 'edit') {
			console.log('edit_menu dropdown selection is EDIT --', this.selection.value);
		}
	}

	render() {
		return (
			<form onBlur={this.selectionData}>
				<select id={this.props.id} ref={input => this.selection = input}>
					<option value="...">...</option>
					<option value="edit">Edit</option>
					<option value="delete">Delete</option>
				</select>
			</form>
		)
	}

}

export default EditMenu;
