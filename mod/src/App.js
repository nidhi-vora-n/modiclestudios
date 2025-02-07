import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from './pages/Work';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About'; 
import Strategy from './pages/services/Strategy';
import Contact from './pages/Contact'; // Import Contact page
import Home from './pages/Home';
import Careers from './pages/Careers';
import Design from './pages/services/Design';
import Develop from './pages/services/Develop';
import Content from './pages/services/Content';
import Digital from './pages/services/Digital';
import ScroltoTop from "./components/ScrolltoTop";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ScroltoTop/>
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              
              <Home/>
            }
          />
          {/* Contact page route */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Strategy" element={<Strategy />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/Develop" element={<Develop />} />
          <Route path="/Digital" element={<Digital />} />
          <Route path="/Content" element={<Content />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
