import styled from '@mui/styled-engine';
import { Card, IconButtonProps } from '@mui/material';
import React from 'react';

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const StyledCard = styled(Card)`
	background-color: #757575;
	width: 100%;
	& * {
		color: #fff;
	}
`;

export const RatingWrap = styled('div')`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
