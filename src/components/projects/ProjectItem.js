import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 1em;
	width: 300px;
`;

const Image = styled.div.attr(props => {})`
	background-image: url(props.url) cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 200px;
	border-radius: 10px;
`;

function ProjectItem() {
	return (
		<Container>
			<Image />
		</Container>
	);
}

export default ProjectItem;
