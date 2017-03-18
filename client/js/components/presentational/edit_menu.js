import React from 'react';
import { hashHistory } from 'react-router';

class EditMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMenu: 'edit-dropdown-menu hidden',
    }
    this.selectionData = this.selectionData.bind(this);
  }

  selectionData(selection) {
    const { id, deleteEntry } = this.props;
    if (selection === 'delete') {
      deleteEntry(this.props.id);
    } else if (selection === 'edit') {
      hashHistory.push('/entries/' + this.props.id);
    }
  }

  toggleClass() {
    if (this.state.editMenu === "edit-dropdown-menu hidden") {
      this.setState({ editMenu: "edit-dropdown-menu" });
    } else {
      this.setState({ editMenu: "edit-dropdown-menu hidden" });
    }
  }

  render() {
    const selectClasses = `edit-menu ${this.props.mood}`
    return (
      <div className="edit-dropdown-container">
        <div className={this.state.editMenu}>
          <p onClick={() => {this.selectionData('edit')}}>Edit</p>
          <p onClick={() => {this.selectionData('delete')}}>Delete</p>
        </div>
        <p className="edit-dropdown-default"
          onClick={this.toggleClass.bind(this)}
          ref={mood => this.moodInput = mood}>
          <i className="fa fa-pencil-square fa-2x" id={this.props.mood} aria-hidden="true"></i>
        </p>
      </div>
    )
  }
}

export default EditMenu;

{/*
  <form id={this.props.id} onChange={this.selectionData} className={this.props.mood}>
  <select className={selectClasses} ref={input => this.selection = input}>
  <option value="...">...</option>
  <option value="edit">Edit</option>
  <option value="delete">Delete</option>
  </select>
  </form>
  */}
