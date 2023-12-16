import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import rootReducer from 'app/store';
import App from './app/App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={rootReducer}>
      <App />
    </Provider>
  </React.StrictMode>
);
