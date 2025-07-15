import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h1>👋 Welcome to VetConnect</h1>
    <p>You're not alone. Connect, support, and grow with your fellow veterans.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
