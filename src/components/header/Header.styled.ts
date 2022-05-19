import { AppBar, styled, Container, Typography } from '@mui/material';

export const StyledContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledAppBar = styled(AppBar)`
	background: #009688;
`;


export const StyledLogo = styled(Typography)`
	text-transform: uppercase;
	flex: 1 0;
	& > a {
		color: white;
		text-decoration: none;
	}
`;

