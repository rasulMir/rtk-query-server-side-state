import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import { IconButton, Tooltip } from '@mui/material';
import { useGetOrdersQuery } from '../../features/ecomm/storeApi';


interface Props {};

export default function UserCart({}: Props) {

	const { data } = useGetOrdersQuery();
	
	return (
		<Tooltip title='Your Cart'>
			<IconButton color='inherit'>
				<Badge
					badgeContent={(!!data) ? data.length : 0}
					color='primary'>
					<ShoppingCartCheckoutIcon />
				</Badge>
			</IconButton>
		</Tooltip>
	)
}