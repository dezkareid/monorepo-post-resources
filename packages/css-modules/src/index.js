import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

const mainElement = document.getElementById('main-app');
render(<App />, mainElement);