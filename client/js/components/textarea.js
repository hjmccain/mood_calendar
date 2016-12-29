import React from 'react';

function TextArea () {
	return (
		<form onSubmit={console.log('Submit input text')}>
			<select className="pure-button" ref={input => this.moodInput = input}>
				<option value="mood">Mood</option>
				<option value="happy">Happy</option>
				<option value="excited">Excited</option>
				<option value="awkward">Awkward</option>
				<option value="ambivalent">Ambivalent</option>
				<option value="bored">Bored</option>
				<option value="sad">Sad</option>
				<option value="depressed">Depressed</option>
			</select>
			<textarea
				id="clear"
				className="textinput"
				rows="10"
				cols="100"
				ref={input => this.textInput = input}>
			</textarea>
			<button type="submit">Submit Entry</button>
		</form>
	)
}

export default TextArea;
