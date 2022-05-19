import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';


interface Props {}

export default function SignLinks({}: Props) {

	const navigate = useNavigate();

	return (
		<ButtonGroup>
			<Button onClick={() => navigate('/signin')} color='inherit' variant='text'>
				Have an Account? Sign in
			</Button>
			<Button onClick={() => navigate('/signup')} variant='contained'>
				Join Us
			</Button>
		</ButtonGroup>
	)
}