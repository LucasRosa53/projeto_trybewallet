import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <section>
        Hello, TrybeWallet!
      </section>
      <Route component={ Login } path="/" exact />
    </div>
  );
}

export default App;
