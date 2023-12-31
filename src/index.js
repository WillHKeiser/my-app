import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render( element);

reportWebVitals();
