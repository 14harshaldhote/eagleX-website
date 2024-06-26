import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DigitalSolutions from './components/services/DigitalSolutions';
import ITServices from './components/services/ITServices';
import DataAnalytics from './components/services/DataAnalytics';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
            <Route path="/services/it-services" element={<ITServices />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />   
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
