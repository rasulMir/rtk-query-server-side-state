import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, StyledForm } from './ContentSearch.styled';
import IconButton from '@mui/material/IconButton';

interface Props {};

export default function ContentSearch({}: Props) {

	const [ txt, setTxt ] = useState<string>('');

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		console.log(txt);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTxt(e.target.value);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					value={txt}
					onChange={handleChange}
					placeholder="Search…"
					inputProps={{ 'aria-label': 'search' }}
				/>
			</Search>

			<IconButton type='submit'>
				<SearchIcon />
			</IconButton>
		</StyledForm>
		
	);
};