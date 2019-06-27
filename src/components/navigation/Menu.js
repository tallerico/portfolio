import React from 'react';
import List from './List';
import ListItem from './ListItem';
import { Transition } from 'react-transition-group';
import { Link } from 'react-scroll';

function Menu(props) {
	return (
		<Transition in={props.clicked} timeout={500}>
			{state => (
				<List state={state}>
					<ListItem state={state} delay={0}>
						<Link
							onClick={props.action}
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}
						>
							About
						</Link>
					</ListItem>

					<ListItem state={state} delay={200}>
						<Link
							onClick={props.action}
							activeClass="active"
							to="skills"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}
						>
							Skills
						</Link>
					</ListItem>

					<ListItem state={state} delay={400}>
						<Link
							onClick={props.action}
							activeClass="active"
							to="projects"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}
						>
							Projects
						</Link>
					</ListItem>

					<ListItem state={state} delay={600}>
						<Link
							onClick={props.action}
							activeClass="active"
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}
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
