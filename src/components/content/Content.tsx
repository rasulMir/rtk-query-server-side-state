import React from 'react';
import { WrapperTop } from './Content.styles';
import ContentSearch from '../contentSearch/ContentSearch';
import Filter from '../filter/Filter';
import ProductsList from '../products/ProductsList';

interface Props {};

const Content: React.FC = ({}: Props) => {
	return (
		<>
			<WrapperTop maxWidth='md'>
				<ContentSearch />
				<Filter />
			</WrapperTop>
			<ProductsList />
		</>
	)
};

export default Content;