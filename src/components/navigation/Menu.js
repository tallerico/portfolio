import React from 'react';
import List from './List';
import ListIteam from './ListItem';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

const Link = styled.a`
	text-decoration: none;
	color: white;
`;

function Menu(props) {
	return (
		<Transition in={props.clicked} timeout={500}>
			{state => (
				<List state={state}>
					<ListIteam state={state} delay={500}>
						<Link href="#about">About</Link>
					</ListIteam>

					<ListIteam state={state} delay={800}>
						<Link href="#skills">Skills</Link>
					</ListIteam>

					<ListIteam state={state} delay={1000}>
						<Link href="#projects">Projects</Link>
					</ListIteam>

					<ListIteam state={state} delay={1200}>
						<Link href="#contact">Contact</Link>
					</ListIteam>
				</List>
			)}
		</Transition>
	);
}

export default Menu;
