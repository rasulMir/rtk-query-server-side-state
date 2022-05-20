import { Dialog, DialogActions, DialogTitle } from '@mui/material'
import React from 'react'
import SignLinks from '../signLinks/SignLinks'

interface Props {
	open: boolean,
	onclose: () => void,
}

export default function SignAlert({ open, onclose }: Props) {

	return (
		<Dialog
			fullWidth={false}
			open={open}
			onClose={onclose}
		>
			<DialogTitle>
				You are not registred!
			</DialogTitle>

			<DialogActions>

				<SignLinks />
			</DialogActions>
		</Dialog>
	)
}