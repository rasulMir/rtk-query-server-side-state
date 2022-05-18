import React, { useState } from 'react';
import { WrapperTop } from './Content.styles';
import ContentSearch from '../contentSearch/ContentSearch';
import Filter from '../filter/Filter';
import ProductsList from '../products/ProductsList';
import { useGetProductsQuery } from '../../features/ecomm/storeApi';
interface Props {};

const Content: React.FC = ({}: Props) => {

	const [ text, setText ] = useState<string>('');
	const { data, isLoading } = useGetProductsQuery(text);
	const changeUrl: (txt: string) => void = (txt) => setText(txt);

	return (
		<>
			<WrapperTop maxWidth='md'>
				<ContentSearch onsubmit={changeUrl} />
				<Filter onchange={changeUrl} />
			</WrapperTop>
			<ProductsList data={ data } isLoading={ isLoading } />
		</>
	)
};

export default Content;