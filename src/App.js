import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
