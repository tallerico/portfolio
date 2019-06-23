import React from 'react';
import styled, { keyframes } from 'styled-components';
import reactlogo from './react.svg';
import heart from './like.svg';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
	padding: 1em;
	background-color: white;
	height: 60px;
`;

const FootText = styled.p`
	font-size: 1em;
	font-weight: 700;
	color: #080ae3;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const IconImage = styled.img`
	margin-top: 12px;
	margin-left: 3px;
	height: 25px;
	animation: ${rotate} 2s infinite linear;
`;

const HeartImage = styled.img`
	margin-left: 3px;
	margin-right: 3px;
	height: 15px;
`;

const FootContainer = styled.div``;

function Footer() {
	return (
		<Container>
			<FootContainer>
				<FootText>
					Made with
					<HeartImage src={heart} alt="heart icon" />
					using
				</FootText>
			</FootContainer>
			<IconImage src={reactlogo} />
		</Container>
	);
}

export default Footer;
