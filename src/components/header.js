import React from 'react';
import Particles from './particles';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	overflow: hidden;
`;

function header() {
	return (
		<Container>
			<Particles />
		</Container>
	);
}

export default header;
