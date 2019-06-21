import styled from 'styled-components';

const h3 = styled.h3.attrs(props => {})`
	color: ${props => props.color};
	font-size: 1em;
	font-weight: 700;
`;

export default h3;
