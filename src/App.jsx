import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/navfoot/nav';
import Footer from './pages/navfoot/foot';
import StarBackground from './pages/background/StarBackground';
import About from './pages/About/about';
import Tech from './pages/Tech/tech';
import Dance from './pages/Dance/dance';
import Contact from './pages/Contact/contact';
import Mode from './pages/background/mode';
import Blog from './pages/MyBlog/blog';
import Integration from './pages/MyBlog/Integration';
import Inspiration from './pages/MyBlog/Inspiration';
import Prism from './pages/MyBlog/Prism';
//import asl-app from './pages/Tech/sl-app/src/AppSL';
//import AppSL from './pages/Tech/sl-app/AppSL.jsx';
//import HomeSL from './pages/Tech/sl-app/components/SL_page/HomeSL.jsx';

const App = () => (
  <>

    <Mode />

    <Router>
      < StarBackground />
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/blog" element={<Blog />} />
          < Route path="/Integration" element={<Integration />} />
          <Route path="/Inspiration" element={<Inspiration />} />
          <Route path="/Prism" element={<Prism />} />
           {/*<Route path="/HomeSL/*"element={HomeSL}/>
         <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>

      <Footer />
    </Router>
  </>
);

export default App;