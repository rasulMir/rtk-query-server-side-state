import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/header/Header';

const MainPage:React.FC = () => {
	return(
		<>
			<CssBaseline />
			<Header />
			<Outlet />
		</>
	);
}; 

export default MainPage;