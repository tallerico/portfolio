import React from 'react';
import styled from 'styled-components';
import H2 from '../base/H2';
import H3 from '../base/H3';
import SkillsItem from './SkillsItem';

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 900px;
	background-color: #f5f2f2;
	border-radius: 10px;
	padding: 1em;
`;

const ContainerItems = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const DarkLine = styled.div`
	height: 1px;
	background-color: #05050d;
	opacity: 0.2;
`;

function SkillsContainer() {
	return (
		<Container>
			<H2 color="#05050D">Skills</H2>
			<DarkLine />
			<ContainerItems>
				<SkillsItem percent={60} technology="Javascript" />
				<SkillsItem percent={40} technology="React" />
				<SkillsItem percent={35} technology="NodeJS" />
				<SkillsItem percent={80} technology="HTML5" />
				<SkillsItem percent={70} technology="CSS3" />
				<SkillsItem percent={80} technology="Git" />
				<SkillsItem percent={40} technology="Gulp" />
				<SkillsItem percent={40} technology="MongoDB" />
			</ContainerItems>
		</Container>
	);
}

export default SkillsContainer;
