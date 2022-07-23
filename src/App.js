import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Works from './pages/Works';
import WorkDetails from './pages/WorkDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works/:id" element={<WorkDetails />}/>
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<h1 style={{textAlign:"center"}}>Not found</h1>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
