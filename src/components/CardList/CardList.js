import React from 'react';

import Card from '../Card/Card.js';

import cardIcon from '../../constants/cardIcon';

import './CardList.scss';

const CardList = () => {
	const shuffle = (array) => {
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
			return array;
		}
	};

	// console.log(cardIcon);
	const arr = ['a', 'b', 'c', 'd'];
	shuffle(arr);
	console.log(arr);

	return (
		<div className='card-list-wrapper'>
			{cardIcon.map((icon, i) => (
				<Card icon={icon} key={i} />
			))}
		</div>
	);
};

export default CardList;
