import styled from 'styled-components';

const Paragraph = styled.p.attrs(props => {})`
	color: ${props => props.color};
	font-size: 0.8em;
	font-weight: 400;
`;

export default Paragraph;
