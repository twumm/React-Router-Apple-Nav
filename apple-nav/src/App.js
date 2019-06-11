import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavWrapper />
      </Router>
    </div>
  );
}

export default App;
