import React from 'react';
import styled from 'styled-components';
import ProjectImage from './ProjectImage';
import random from './random.jpg';
import dash from './dash.jpg';
import H3 from '../base/H3';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background: rgb(8, 101, 227);
	background: linear-gradient(149deg, rgba(8, 101, 227, 1) 0%, rgba(8, 10, 227, 1) 100%);
	padding: 3em 1em 3em 1em;
`;

const ProjectItem = styled.div`
	margin: 10px;
	width: 300px;
	background-color: #f5f2f2;
	border-radius: 10px;
`;

const Title = styled(H3)`
	font-weight: 700;
`;

const InfoContainer = styled.div`
	padding: 1em;
`;

const Nav = styled.div``;

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

function Projects() {
	return (
		<Container>
			<ProjectItem>
				<ProjectImage url={dash} />
				<InfoContainer>
					<Title color="#05050D">React App</Title>
					<DarkLine />
					<Nav>
						<Link href="https://dashup.herokuapp.com/home/">Live</Link>
						<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-12/tree/development">
							Code
						</Link>
					</Nav>
				</InfoContainer>
			</ProjectItem>
			<ProjectItem>
				<ProjectImage url={random} />
				<InfoContainer>
					<Title color="#05050D">Random Quote Generator</Title>
					<DarkLine />
					<Nav>
						<Link href="https://tallerico.github.io/Treehouse-FSJS-Project-1/">Live</Link>
						<Link href="https://github.com/tallerico/Treehouse-FSJS-Project-1">Code</Link>
					</Nav>
				</InfoContainer>
			</ProjectItem>
		</Container>
	);
}

export default Projects;
