import { Container, Grid } from '@mui/material';
import React from 'react';
import { IProducts } from '../../types';
import ProductItem from './ProductItem';
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
	data: IProducts[] | undefined,
	isLoading: boolean,
};

export default function ProductsList({ data, isLoading }: Props) {

	return (
		<Container maxWidth='md' sx={{ pt: '30px', pb: '30px' }}>
			<Grid 
				justifyContent="center"
				container
				spacing={2}>
				{
					!isLoading ? (<CircularProgress />) : 
						(data && data.map(i => <ProductItem key={i.id} {...i} /> ))
				}
				
			</Grid>
		</Container>
	);
};