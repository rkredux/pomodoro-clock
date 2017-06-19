import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const initialTime = {
	hrs: 0, 
	mins: 25, 
	seconds: 0
}

ReactDOM.render(<App initialTime={initialTime}/>, document.getElementById('root'));
registerServiceWorker();
