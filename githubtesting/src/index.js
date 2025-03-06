import React from 'react';
import ReactDOM from 'react-dom/client'; // <- This import changed
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // <- This initialization changed

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

