import React from 'react';
import { hashHistory } from 'react-router';

class NewEntryBtn extends React.Component {
  constructor() {
    super();
    this.state = { text: '' }
  }

  routeLink() {
    hashHistory.push('/new_entry');
  }

  displayText() {
    if (this.props.showText) {
      if (this.state.text === '') {
        this.setState({ text: 'New entry' })
      } else {
        this.setState({ text: '' })
      }
    }    
  }

  render() {
    return (
      <div
        className="create-new-entry"
        onClick={this.routeLink.bind(this)}
        onMouseOver={this.displayText.bind(this)}
        onMouseOut={this.displayText.bind(this)}
        >
        <i className="fa fa-plus-square fa-2x" aria-hidden="true"></i>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default NewEntryBtn;
