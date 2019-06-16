import React from 'react';
import Particles from './particles';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: #343434;
`;

const TextContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 300px;
	left: 50%;
	margin-left: -150px;
	top: 50%;
	margin-top: -150px;
`;

const HeaderOne = styled.h1`
	color: white;
`;

const Paragraph = styled.p`
	color: white;
`;

const BlueDiv = styled.div`
	height: 1px;
	background-color: #080ae3;
`;

function header() {
	return (
		<Container>
			<TextContainer>
				<HeaderOne>Hi! I am Mike.</HeaderOne>
				<BlueDiv />
				<Paragraph>Thank you so much for checking out my portfolio.</Paragraph>
			</TextContainer>
			<Particles />
		</Container>
	);
}

export default header;
