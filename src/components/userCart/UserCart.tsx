import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import { IconButton, Tooltip } from '@mui/material';

interface Props {};

export default function UserCart({}: Props) {
	return (
		<Tooltip title='Your Cart'>
			<IconButton color='inherit'>
				<Badge
					badgeContent={2}
					color='primary'>
					<ShoppingCartCheckoutIcon />
				</Badge>
			</IconButton>
		</Tooltip>
	)
}