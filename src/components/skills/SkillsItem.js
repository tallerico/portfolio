import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import SkillsPercent from './SkillsPercent';
import H3 from '../base/H3';

const Container = styled.div`
	padding: 1em;
	height: 60px;
	width: 200px;
	display: flex;
	flex-direction: row;
	text-align: center;
	justify-content: flex-start;
	align-content: center;
`;
const TextContainer = styled.div`
	display: flex;
	width: 50%;
`;

const VertLine = styled.div`
	width: 1px;
	height: 100%;
	background-color: #05050d;
	opacity: 0.2;
`;

const Title = styled(H3)`
	margin-left: 10px;
	line-height: 1.05em;
`;

function SkillItem(props) {
	return (
		<Container>
			<SkillsPercent percent={props.percent} />
			<VertLine />
			<TextContainer>
				<i class={`devicon-${props.technology.toLowerCase()}-plain colored`} />
				<Title>{props.technology}</Title>
			</TextContainer>
		</Container>
	);
}

export default SkillItem;
