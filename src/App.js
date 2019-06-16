import React, { Fragment } from 'react';
import Header from './components/header';
import Navigation from './components/navigation/navigation';
import { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
	}
`;

function App() {
	return (
		<Fragment>
			<GlobalStyles />
			<Navigation />
			<Header />
		</Fragment>
	);
}

export default App;
