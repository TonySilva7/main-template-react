import { ConfigProvider } from 'antd';
import 'antd/dist/antd.min.css';
import ptBR from 'antd/lib/locale/pt_BR';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { store } from './redux/store';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
			<ConfigProvider locale={ptBR}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<ToastContainer autoClose={3000} className='toast-container' />
				<App />
			</ThemeProvider>
			</ConfigProvider>
		</Provider>
  </React.StrictMode>
);

