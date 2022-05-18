import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import RouterNavComponent from './components/RouteNavComponent';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
     		<RouterNavComponent />
    	</Provider>
		</BrowserRouter>
  </React.StrictMode>
);
