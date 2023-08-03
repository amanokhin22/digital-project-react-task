import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import '../src/styles/global.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElem = document.getElementById('root');

if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);
    root.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );

}

