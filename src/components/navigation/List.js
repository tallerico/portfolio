import styled from 'styled-components';

const List = styled.ul`
	position: absolute;
	transform: translateX(
		${({ state }) => (state === 'entering' || state === 'entered' ? 0 : 300)}px
	);
	transition: transform 1000ms ease-in-out;
	list-style: none;
	top: 30px;
	right: 60px;
	z-index: 3;
	font-size: 2.5em;
`;

export default List;
