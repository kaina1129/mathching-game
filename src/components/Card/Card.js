import React from 'react';

import './Card.scss';

const Card = (props) => {
	const { icon } = props;
	return (
		<div className='card'>
			<i class={icon}></i>
		</div>
	);
};

export default Card;
