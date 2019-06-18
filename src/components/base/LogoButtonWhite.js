import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  font-size: 1em;
  padding: .8em;
  width:115px;
  height:40px
  border-radius: 100px;
  background-color: #F5F2F2;
  border: none;
  color: #080ae3;
  text-align: right;
`;

const Image = styled.img`
	position: absolute;
	margin-right: 3px;
	height: 30px;
	left: 8px;
	top: 50%;
	transform: translateY(-50%);
`;

function LogoButtonWhite(props) {
	return (
		<a href="https://github.com/tallerico">
			<Button>
				<Image src={props.image} alt="GitHub Logo" />
				GitHub
			</Button>
		</a>
	);
}

export default LogoButtonWhite;
