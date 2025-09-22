import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Component definitions
function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>Welcome to the About Page</h2>;
}

function Contact() {
  return <h2>Welcome to the Contact Page</h2>;
}

// Main App component
function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
          <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
        </nav>

        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
