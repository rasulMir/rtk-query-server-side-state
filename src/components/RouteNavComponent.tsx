import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Content from './content/Content';

interface Props {};

export const RouterNavComponent: React.FC = ({}: Props) => {
	return (
		<Routes>
			<Route path='/' element={<MainPage/>}>
				<Route index element={<Content />} />
			</Route>

			<Route path='*' element={<NotFoundPage />} />
			<Route path='signin' element={<SignIn />} />
			<Route path='signup' element={<SignUp />} />
		</Routes>
	);
};

export default RouterNavComponent;