import React from 'react';
import List from './List';
import ListItem from './ListItem';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

// const Link = styled.a`
// 	text-decoration: none;
// 	color: white;
// `;

function Menu(props) {
	return (
		<Transition in={props.clicked} timeout={500}>
			{state => (
				<List state={state}>
					<ListItem state={state} delay={500}>
						<Link
							onClick={props.action}
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							About
						</Link>
					</ListItem>

					<ListItem state={state} delay={800}>
						<Link
							onClick={props.action}
							activeClass="active"
							to="skills"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Skills
						</Link>
					</ListItem>

					<ListItem state={state} delay={1000}>
						<Link
							onClick={props.action}
							activeClass="active"
							to="projects"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Projects
						</Link>
					</ListItem>

					<ListItem state={state} delay={1200}>
						<Link
							onClick={props.action}
							activeClass="active"
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Contact
						</Link>
					</ListItem>
				</List>
			)}
		</Transition>
	);
}

export default Menu;
