import { Container, Grid, ThemeProvider } from '@mui/material';
import ProductItem from './ProductItem';
import React from 'react';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: grey[400],
		},
	}
});

interface Props {};

export default function ProductsList({}: Props) {
	return (
		<Container maxWidth='md'>
			<ThemeProvider theme={theme}>
				<Grid 
					justifyContent="center"
					container
					spacing={2}>

					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />

				</Grid>
			</ThemeProvider>
		</Container>
	);
};