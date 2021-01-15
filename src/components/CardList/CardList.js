import React, { useState, useEffect } from 'react';

import Card from '../Card/Card.js';
import Popup from '../Popup/Popup.js';

import { shuffle, result } from '../../utils/shuffle';

import './CardList.scss';

const CardList = () => {
	const [popup, setPopup] = useState(false);
	const [openedCards, setOpenedCards] = useState([]);
	const [click, setClick] = useState([]);
	const [allCards, setAllCards] = useState(result);

	console.log(popup);

	useEffect(() => {
		openedCards.length === 2 && compareTwoCard();
	}, [openedCards]);

	const handleClickOnCard = (icon, i) => {
		const newClick = [...click];
		newClick[i] = true;
		setClick(newClick);

		const newOpenedCard = [...openedCards];
		newOpenedCard.push({ icon: icon, index: i });
		setOpenedCards(newOpenedCard);
	};

	const compareTwoCard = () => {
		if (openedCards[0].icon !== openedCards[1].icon) {
			setTimeout(() => {
				const newClick = [...click];
				newClick[openedCards[0].index] = false;
				newClick[openedCards[1].index] = false;
				setClick(newClick);
			}, 400);
		}

		setOpenedCards([]);
		isGameOver();
	};

	const isGameOver = () => {
		const result = click.filter(function (v) {
			return v === true;
		});
		console.log(result);
		if (result.length === 16) {
			console.log('1');
			setPopup(true);
		}
	};

	const retryGame = () => {
		const newAllCards = [...allCards];
		const newGame = shuffle(newAllCards);
		setAllCards(newGame);
		setClick([]);
		setPopup(false);
	};

	return (
		<div className='card-list-wrapper'>
			{allCards.map((icon, i) => (
				<Card
					handleClickOnCard={handleClickOnCard}
					i={i}
					icon={icon}
					key={i}
					click={click[i]}
				/>
			))}
			{popup && <Popup setPopup={setPopup} retryGame={retryGame} />}
		</div>
	);
};

export default CardList;
