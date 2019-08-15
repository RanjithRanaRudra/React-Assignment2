import React from 'react';
import './Validation.css';

const validation = (props) => {

	let validation = null;
	var userInputLength = props.length
	if (userInputLength > 0) {
		if (userInputLength < 5) {
			validation = <p> Text too short </p>;
		} else if (userInputLength > 15) {
			validation = <p> Text long enough </p>;
		}
	}

	return (
		<div>
			{validation}
		</div>
	);
}

export default validation;