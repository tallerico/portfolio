import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import Menu from './Menu';
import Circle from './Circle';

function Navigation() {
	const [clicked, setClicked] = useState(false);

	function handleClick() {
		if (clicked) {
			setClicked(false);
		} else {
			setClicked(true);
		}
	}

	return (
		<div>
			<Menu clicked={clicked} />
			<Transition in={clicked} timeout={500}>
				{state => (
					// state change: exited -> entering -> entered -> exiting -> exited
					<Circle onClick={handleClick} state={state} />
				)}
			</Transition>
		</div>
	);
}

export default Navigation;
