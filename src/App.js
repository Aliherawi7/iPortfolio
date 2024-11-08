import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Loading from "./components/Loading"
import NotFound from './components/NotFound';
import InstallPrompt from './components/InstallPrompt';
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Post = React.lazy(() => import('./pages/Post'));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path={"/blog/post:id"} element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InstallPrompt />
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
