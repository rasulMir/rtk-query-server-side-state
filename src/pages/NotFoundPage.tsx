import { Container, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)`
	margin: 50px 0;
	& * {
		padding: 0 20px 0 0;
	}
`;

interface Props {};

const NotFoundPage: React.FC = () => {
	return (
		<StyledContainer maxWidth='lg'>
			<Typography 
				variant='h5'
				component='span'
			>
				Page Not Found Error 404
			</Typography>
			<Typography 
				variant='body1'
				component='span'
			>
				<Link to='/'>Go Back To Main Page</Link>
			</Typography>
		</StyledContainer>
	);
};

export default NotFoundPage;