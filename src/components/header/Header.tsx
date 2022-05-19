import { Toolbar } from '@mui/material';
import { StyledContainer, StyledAppBar, StyledLogo } from './Header.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderUser from '../headerUser/HeaderUser';
import UserCart from '../userCart/UserCart';
import { useGetCurrentUserQuery } from '../../features/ecomm/storeApi';
import SignLinks from '../signLinks/SignLinks';

const Header: React.FC = () => {

	const { data } = useGetCurrentUserQuery();

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

					{
						data && data.user ?
							<>
								<UserCart />
								<HeaderUser name={data.user.name} />
							</> : <SignLinks />
					}
					

				</StyledContainer>
			</Toolbar>
		</StyledAppBar>
	);
};


export default Header;