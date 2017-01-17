import React from 'react';

class DateDropDown extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return <select className={'mood-menu'}>
								<option value="date">All dates</option>
								<option value="this_week">This week</option>
								<option value="this_month">This month</option>
								<option value="last_month">Last month</option>
								<option value="this_year">This year</option>
								<option value="Previous years">Previous yrs</option>
						</select>
	}
}

export default DateDropDown;
