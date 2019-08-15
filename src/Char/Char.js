import React from 'react';
import './Char.css';

const char = (props) => {

	const style = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid black',
	};

	return (
		<div style={style}>
			<p onClick={props.click}>{props.data}</p>
		</div>
	);
}

export default char;