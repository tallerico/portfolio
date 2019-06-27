import React from 'react';
import styled from 'styled-components';
import github from './001-github-logo.svg';
import linkedin from './002-linkedin.svg';
import dev from './DEV_ICON-01.svg';

const Container = styled.div`
	display: flex;
`;

const Icon = styled.img`
	height: 40px;
	margin-right: 10px;
`;

function LinkBlock() {
	return (
		<Container>
			<a href="https://www.github.com/tallerico">
				<Icon src={github} alt="github icon" />
			</a>
			<a href="https://www.linkedin.com/in/mike-tallerico-03580339/">
				<Icon src={linkedin} alt="linked icon" />
			</a>
			<a href="https://www.linkedin.com/in/mike-tallerico-03580339/">
				<Icon src={dev} alt="dev.to icon" />
			</a>
		</Container>
	);
}

export default LinkBlock;
