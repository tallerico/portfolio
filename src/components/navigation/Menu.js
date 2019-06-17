import React from 'react';
import List from './List';
import ListIteam from './ListItem';
import { Transition } from 'react-transition-group';

function Menu(props) {
	return (
		<Transition in={props.clicked} timeout={500}>
			{state => (
				<List state={state}>
					<ListIteam state={state} delay={500}>
						About
					</ListIteam>

					<ListIteam state={state} delay={800}>
						Skills
					</ListIteam>

					<ListIteam state={state} delay={1000}>
						Projects
					</ListIteam>

					<ListIteam state={state} delay={1200}>
						Contact
					</ListIteam>
				</List>
			)}
		</Transition>
	);
}

export default Menu;
