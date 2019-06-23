import styled from 'styled-components';

const h2 = styled.h2.attrs(props => {})`
	color: ${props => props.color};
	font-size: 1.5em;
	font-weight: 700;
`;

export default h2;
