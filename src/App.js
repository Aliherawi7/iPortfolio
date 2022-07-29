import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Loading from "./components/Loading"

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Home = React.lazy(() => import('./pages/Home'));
const Works = React.lazy(() => import('./pages/Works'));
const WorkDetails = React.lazy(() => import('./pages/WorkDetails'));
const Blog = React.lazy(()=> import('./pages/Blog'));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works/:id" element={<WorkDetails />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/post:id" element={<Blog />}/>
          <Route path="*" element={<Loading />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
