import { styled } from '@mui/material';
import Container from '@mui/material/Container';

export const WrapperTop = styled(Container)`
	display : flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 15px;
	padding-bottom: 15px;


	@media (min-width:600px) {
		& {
			flex-direction: row;
		}
	}
`;