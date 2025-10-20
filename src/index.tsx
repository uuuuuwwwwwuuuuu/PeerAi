import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/App';
import { ThemeProvider } from 'styled-components';
import Theme from './colorConstants';
import { BrowserRouter, HashRouter, Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ThemeProvider theme={Theme}>
        <HashRouter>
            <App />
        </HashRouter>
    </ThemeProvider>
);
