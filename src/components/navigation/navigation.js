import React, { useState, useEffect, useCallback } from 'react';
import { Transition } from 'react-transition-group';
import Circle from './Circle';
import styled from 'styled-components';

function Navigation() {
	const [clicked, setClicked] = useState(false);

	const handleClick = useCallback(() => {
		if (clicked) {
			setClicked(false);
		} else {
			setClicked(true);
		}
	});

	return (
		<div>
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
