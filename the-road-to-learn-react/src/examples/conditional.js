import React, {Fragment} from "react";

//multiple conditional rendering
export const Test1 = ({status}) => {
	const NOTIFICATION_STATES = {
		info: 'Did you know? ...',
		warning: 'Be careful here ...',
		error: 'Something went wrong ...',
	};
	return (
		<div>
			{NOTIFICATION_STATES[status]}
		</div>
	)
}

//Nested conditional rendering
export const Test2 = ({list}) => {
	const isNotAvailable = !list;
	const isEmpty = !list.length;

	return (
		<Fragment>
			{isNotAvailable
				? <p>Sorry, the list is not there</p>
				: (isEmpty
					? <p>Sorry, the list is empty.</p>
					: <div>{list.map(item => <span>{item}</span>)}</div>)}
		</Fragment>
	)
}
