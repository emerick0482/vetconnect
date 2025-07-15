import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial' }}>
    <h1>Welcome to VetConnect</h1>
    <p>This is a safe place for veterans to connect, support, and grow together.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
