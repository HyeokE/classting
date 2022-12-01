import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'jotai';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 auto',
            minHeight: '100vh',
          }}
        >
          <App />
        </div>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
