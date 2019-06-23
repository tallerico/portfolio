import styled from 'styled-components';

const Paragraph = styled.p.attrs(props => {})`
	color: ${props => props.color};
	font-size: 1em;
	font-weight: 400;
`;

export default Paragraph;
