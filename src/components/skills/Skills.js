import React from 'react';
import styled from 'styled-components';
import SkillsContainer from './SkillsContainer';

const Container = styled.div`
	background: #080ae3;
	padding: 3em 1em 3em 1em;
`;

function SKills() {
	return (
		<Container id="skills">
			<SkillsContainer />
		</Container>
	);
}

export default SKills;
