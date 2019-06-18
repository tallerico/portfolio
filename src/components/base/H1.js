import styled from 'styled-components';

const h1 = styled.h1.attrs(props => {})`
	color: ${props => props.color};
	font-size: 1em;
	font-weight: 700;
`;

export default h1;
