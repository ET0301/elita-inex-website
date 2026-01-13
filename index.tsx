
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
    {/* <div style={{ color: 'red', fontSize: '40px', padding: '50px' }}>TEST MODE: REACT IS MOUNTED</div> */}
  </React.StrictMode>
);
