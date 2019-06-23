import React, { useState, Fragment } from 'react';
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
		<Fragment>
			<Menu clicked={clicked} action={handleClick} />
			<Transition in={clicked} timeout={500}>
				{state => (
					// state change: exited -> entering -> entered -> exiting -> exited
					<Circle onClick={handleClick} state={state} />
				)}
			</Transition>
		</Fragment>
	);
}

export default Navigation;
