import React from 'react';

function MoodDropDown (props) {
	return (
		<select>
			<option value="mood">Mood</option>
			<option value="happy">Happy</option>
			<option value="excited">Excited</option>
			<option value="awkward">Awkward</option>
			<option value="ambivalent">Ambivalent</option>
			<option value="bored">Bored</option>
			<option value="sad">Sad</option>
			<option value="depressed">Depressed</option>
		</select>
	)
}

export default MoodDropDown;
