import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation/navigation';
import About from './components/about/About';
import styled from 'styled-components';

const ContainerMax = styled.div`
	position: relative;
	overflow: hidden;
`;

function App() {
	return (
		<ContainerMax>
			<Navigation />
			<Header />
			<About />
		</ContainerMax>
	);
}

export default App;
