import { Toolbar } from '@mui/material';
import { StyledContainer, StyledAppBar, StyledLogo } from './Header.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderUser from '../headerUser/HeaderUser';
import UserCart from '../userCart/UserCart';

const Header: React.FC = () => {
	return(
		<StyledAppBar position='sticky'>
			<Toolbar>
				<StyledContainer maxWidth='lg' disableGutters>

					<StyledLogo
						variant='body1'
					>
						<Link to='/'>
							Our Store
						</Link>
					</StyledLogo>

					<UserCart />

					<HeaderUser />

				</StyledContainer>
			</Toolbar>
		</StyledAppBar>
	);
};


export default Header;