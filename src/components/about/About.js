import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import InfoContainer from './InfoContainer';
import H1 from '../base/H1';
import Paragraph from '../base/Paragraph';
import headshot from './headshot.jpg';
import LinkBlock from './LinkBock';

const WhiteLine = styled.div`
	height: 1px;
	background-color: #f5f2f2;
	opacity: 0.5;
`;

const Image = styled.img`
	width: 100px;
	margin-right: 5px;
	float: left;
	border-radius: 10px;
`;

const Span = styled.span`
	font-size: 1.2em;
	font-weight: 700;
`;

function About() {
	return (
		<Container>
			<InfoContainer>
				<H1 color="#F5F2F2">About Me</H1>
				<WhiteLine />
				<Paragraph color="#F5F2F2">
					<Image src={headshot} alt="headshot of author" /> <Span>M</Span>y name is Mike Tallerico,
					and I am a web developer. Thank you for taking the time to check out my portfolio. What
					you will find here are many of the projects that display my creativity as a developer.
					What started as a hobby has turned into a full-blown passion for code and web
					technologies. Whether you are here because of my resume or you are here to have me build
					you something cool, I hope that this page gives you a glimpse as to what I am capable of
					building. What you won't see here is the many hours of dedication to learning various web
					technologies. I can assure you that my passion and dedication will be applied to your
					company and/or your project. If you have any questions at all, please feel free to email,
					call, or leave a comment below. Thank you again for your time!
				</Paragraph>
				<LinkBlock />
			</InfoContainer>
		</Container>
	);
}

export default About;
