import React from 'react';

class TextArea extends React.Component {
	constructor(props) {
		super(props);
		this.sendInput = this.sendInput.bind(this);
	}

	sendInput(e) {
		this.props.getInput(this.textInput.value);
	}

	render () {
		return (
				<textarea
					id="clear" rows="10" cols="100"
					ref={input => this.textInput = input}
					onBlur={this.sendInput} />
		)
	}
}

export default TextArea;
