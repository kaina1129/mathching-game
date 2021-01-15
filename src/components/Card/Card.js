import React, { useState } from 'react';

import './Card.scss';

const Card = (props) => {
	const { icon, i, click, handleClickOnCard } = props;

	return (
		<div
			className={`card ${click && 'card-open'}`}
			onClick={() => handleClickOnCard(icon, i)}
		>
			<i class={icon}></i>
		</div>
	);
};

export default Card;
