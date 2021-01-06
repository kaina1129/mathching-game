import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import CardList from './components/CardList/CardList.js';

function App() {
	return (
		<div className='App'>
			<div className='matching-game'>
				<Header text='Matching games' />
				<CardList />
			</div>
		</div>
	);
}

export default App;
