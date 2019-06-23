import React from 'react';
import styled from 'styled-components';
import ProjectImage from './ProjectImage';
import random from './img/random.jpg';
import dash from './img/dashup.jpg';
import gallery from './img/gallery.jpg';
import fargalaxy from './img/fargalaxyblue.jpg';
import tictactoe from './img/tictactoe.jpg';
import directory from './img/directory.jpg';
import form from './img/form.jpg';
import pagination from './img/pagination.jpg';
import library from './img/library.jpg';
import pug from './img/pug.jpg';
import twitter from './img/twitter.jpg';
import H2 from '../base/H2';
import H3 from '../base/H3';
import Paragraph from '../base/Paragraph';

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	justify-content: space-evenly;
	background-color: #f5f2f2;
	padding: 3em 1em 3em 1em;
`;

const ProjectItem = styled.div`
	position: relative;
	margin: 10px;
	width: 300px;
	background-color: white;
	border-radius: 10px;
`;

const Title = styled(H3)`
	font-weight: 700;
`;

const InfoContainer = styled.div`
	position: relative;
	padding: 1em;
`;

const Nav = styled.div`
	position: absolute;
	left: 1em;
	bottom: 1em;
`;

const Link = styled.a`
	text-decoration: none;
	color: #080ae3;
	margin-right: 5px;
`;

const DarkLine = styled.div`
	height: 1px;
	background-color: #05050d;
	opacity: 0.2;
	margin-bottom: 5px;
`;

const Info = styled(Paragraph)`
	margin-bottom: 25px;
`;

function Projects() {
	return (
		<Container id="projects">
			<ProjectItem>
				<ProjectImage url={dash} />
				<InfoContainer>
					<Title color="#05050D">React Dashboard App</Title>
					<DarkLine />
					<Info>
						Personal Dashboard App built using the MERN stack. MongoDB, Express, React, Node.
					</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://dashup.herokuapp.com/home/">Live</Link>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-12/tree/development">
						Code
					</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={gallery} />
				<InfoContainer>
					<Title color="#05050D">React Gallery App</Title>
					<DarkLine />
					<Info>React picture gallery using the Flikr API.</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://react-gallery-jmt.netlify.com">Live</Link>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-9">Code</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={fargalaxy} />
				<InfoContainer>
					<Title color="#05050D">React SpaceX App</Title>
					<DarkLine />
					<Info>React app that aggregates SpaceX launch data. Currently a work in progress.</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://fargalaxy.io">Live</Link>
					<Link href="https://github.com/tallerico/spacex">Code</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={tictactoe} />
				<InfoContainer>
					<Title color="#05050D">Tic Tac Toe Game</Title>
					<DarkLine />
					<Info>Simple tic tac toe game built using vanilla JavaScript.</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://tallerico.github.io/Treehouse-FSJS-Project-4/">Live</Link>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-4">Code</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={random} />
				<InfoContainer>
					<Title color="#05050D">Random Quote Generator</Title>
					<DarkLine />
					<Info>Simple random quote generator using vanilla JavaScript.</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://tallerico.github.io/Treehouse-FSJS-Project-1/">Live</Link>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-1">Code</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={directory} />
				<InfoContainer>
					<Title color="#05050D">Employee Directory</Title>
					<DarkLine />
					<Info>Practice pulling data from an API and manipulating the data into a simple UI.</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://tallerico.github.io/Treehouse-FSJS-Project-5/">Live</Link>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-5">Code</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={form} />
				<InfoContainer>
					<Title color="#05050D">Form Validation Sample</Title>
					<DarkLine />
					<Info>Practice validating data from a form using vanilla JavaScript.</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://tallerico.github.io/Treehouse-FSJS-Project-3/">Live</Link>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-3">Code</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={pagination} />
				<InfoContainer>
					<Title color="#05050D">Pagination Sample</Title>
					<DarkLine />
					<Info>
						Practice building pagination from a list of students using vanilla JavaScript.
					</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://tallerico.github.io/Treehouse-FSJS-Project-2/">Live</Link>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-2">Code</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={pug} />
				<InfoContainer>
					<Title color="#05050D">Library Manager</Title>
					<DarkLine />
					<Info>Library book manager built using Pug, Node and SQLite DB.</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-10">Code</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={library} />
				<InfoContainer>
					<Title color="#05050D">Custom API for Review Platform</Title>
					<DarkLine />
					<Info>Custom API built for a course review platform suing MongoDB and Mongoose.</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-11">Code</Link>
				</Nav>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={twitter} />
				<InfoContainer>
					<Title color="#05050D">Twitter App</Title>
					<DarkLine />
					<Info>
						This project uses twitters API to pull in your latest favorited, tweeted and DM's
						messages. It will also allow you to tweet from the dashboard.
					</Info>
				</InfoContainer>
				<Nav>
					<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-7">Code</Link>
				</Nav>
			</ProjectItem>
		</Container>
	);
}

export default Projects;
