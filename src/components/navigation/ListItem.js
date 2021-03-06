import styled from 'styled-components';

// const Input = styled.input.attrs(props => ({
//   // we can define static props
//   type: "password",

//   // or we can define dynamic ones
//   size: props.size || "1em",
// }))`
//   color: palevioletred;
//   font-size: 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;

//   /* here we use the dynamically computed prop */
//   margin: ${props => props.size};
//   padding: ${props => props.size};
// `;

const ListItem = styled.li.attrs(props => ({}))`
	color: white;
	cursor: pointer;
	transform: translateX(${({ state }) => (state === 'entering' || state === 'entered' ? 0 : 50)}px);
	transition: transform 1000ms ease-in-out;
	transition-delay: ${props => props.delay}ms;
`;

export default ListItem;
