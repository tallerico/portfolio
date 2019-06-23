import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation/navigation';
import About from './components/about/About';
import styled from 'styled-components';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';

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
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</ContainerMax>
	);
}

export default App;
