import React from 'react';

import './Header.scss';

const Header = (prop) => {
	const { text } = prop;
	return (
		<div className='Header'>
			<h1>{text}</h1>
		</div>
	);
};

export default Header;
