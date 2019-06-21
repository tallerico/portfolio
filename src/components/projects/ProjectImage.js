import styled from 'styled-components';

const Image = styled.div.attrs(props => {})`
	background-image: url(${props => props.url});
	background-size: cover;
	width: 100%;
	height: 200px;
	border-radius: 10px;
`;

export default Image;
