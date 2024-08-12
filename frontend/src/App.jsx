import React,{useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Dashboard from './Dashboard';

const App = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [bannerText, setBannerText] = useState("Welcome to our website!");
  const [bannerLink, setBannerLink] = useState("https://example.com");
  const [bannerTimer, setBannerTimer] = useState(10);

  return (
    <div id="app" className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home isBannerVisible={isBannerVisible} bannerText={bannerText} bannerLink={bannerLink} bannerTimer={bannerTimer} />} />
        <Route path="/dashboard" element={<Dashboard setIsBannerVisible={setIsBannerVisible} setBannerText={setBannerText} setBannerLink={setBannerLink} setBannerTimer={setBannerTimer} />} />
      </Routes>
    </div>
  );
};

export default App;
