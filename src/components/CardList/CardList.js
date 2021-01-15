import React, { useState } from 'react';

import Card from '../Card/Card.js';
import Popup from '../Popup/Popup.js';

import cardIcon from '../../constants/cardIcon';
import shuffle from '../../utils/shuffle';

import './CardList.scss';

const CardList = () => {
	const [popup, setPopup] = useState(true);
	const [matchedCard, setMatchCard] = useState([]);
	const [openedCards, setOpenedCards] = useState([]);
	const [click, setClick] = useState([]);

	shuffle(cardIcon);

	const currentCard = this;
	const previousCard = openedCards[0];

	const handleClickOnCard = (i) => {
		console.log(cardIcon[i]);
		console.log(openedCards);
		setClick(cardIcon[i] === true);
		if (openedCards.length === 1) {
			const newCard = [...openedCards];
			newCard.push(cardIcon[i]);
			setOpenedCards(newCard);
			compareTwoCard(currentCard, previousCard);
		} else openedCards.push(cardIcon[i]);
	};

	const compareTwoCard = () => {
		if (currentCard === [previousCard]) {
			matchedCard.push(currentCard, previousCard);
			setOpenedCards([]);
			isGameOver();
		} else setOpenedCards([]);
	};

	const isGameOver = () => {
		if (matchedCard.length === cardIcon.length) {
			setPopup(true);
		}
	};

	return (
		<div className='card-list-wrapper'>
			{cardIcon.map((icon, i) => (
				<Card
					handleClickOnCard={handleClickOnCard}
					i={i}
					icon={icon}
					key={i}
					click={click}
				/>
			))}
			{popup ? <Popup setPopup={setPopup} /> : null}
		</div>
	);
};

export default CardList;
