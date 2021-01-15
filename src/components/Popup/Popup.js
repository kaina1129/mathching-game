import React from 'react';

import './Popup.scss';

const Popup = ({ setPopup }) => {
	return (
		<div className='popup-wrapper'>
			<div className='popup-container'>
				<i onClick={() => setPopup(false)} class='far fa-times-circle'></i>
				<div className='popup-content'>
					<h3>Congratulations!</h3>
					<p>You made it!</p>
				</div>
				<div className='button-container'>
					<button>Retry</button>
					<button>Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
