import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
