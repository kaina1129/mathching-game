import React, { useState } from 'react';

import './Card.scss';

const Card = (props) => {
	const { icon, handleClickOnCard, i, click } = props;


	return (
		<div
			className={`card ${click ? 'card-open' : null}`}
			onClick={() => handleClickOnCard(i)}
		>
			<i class={icon}></i>
		</div>
	);
};

export default Card;
