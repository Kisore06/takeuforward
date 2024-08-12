import React from 'react';

const Dashboard = ({ setIsBannerVisible, setBannerText, setBannerLink, setBannerTimer }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={() => setIsBannerVisible(prev => !prev)}>Toggle Banner</button>
      <input type="text" placeholder="Banner Text" onChange={(e) => setBannerText(e.target.value)} />
      <input type="text" placeholder="Banner Link" onChange={(e) => setBannerLink(e.target.value)} />
      <input type="number" placeholder="Banner Timer" onChange={(e) => setBannerTimer(Number(e.target.value))} />
    </div>
  );
};

export default Dashboard;
