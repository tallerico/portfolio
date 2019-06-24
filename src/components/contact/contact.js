import React from 'react';
import styled from 'styled-components';
import H2 from '../base/H2';

const Container = styled.div`
	padding: 3em;
	background-color: #080ae3;
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	width: 300px;
`;
const Form = styled.form`
	width: 300px;
`;

const Label = styled.label`
	display: block;
	color: white;
	font-weight: 700;
	margin-bottom: 0.5em;
`;

const Input = styled.input`
	border-radius: 10px;
	border: none;
	margin-bottom: 0.5em;
	height: 30px;
	width: 300px;
`;

const Textarea = styled.textarea`
	border-radius: 10px;
	border: none;
	height: 100px;
	width: 300px;
	margin-bottom: 0.5em;
`;

const SubmitButton = styled.button`
	display: block;
	background-color: #fff;
	border: none;
	padding: 0.7em;
	border-radius: 10px;
`;

function contact() {
	return (
		<Container id="contact">
			<FormContainer>
				<H2 color="white">Contact Me</H2>
				<Form name="contact" method="POST" data-netlify="true">
					<input type="hidden" name="form-name" value="contact" />
					<Label htmlFor="name">Name</Label>
					<Input id="name" type="text" name="name" />
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="text" name="email" />
					<Label htmlFor="help">How Can I Help?</Label>
					<Textarea id="help" type="text" name="message" />
					<SubmitButton type="submit">Submit</SubmitButton>
				</Form>
			</FormContainer>
		</Container>
	);
}

export default contact;
