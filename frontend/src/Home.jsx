import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import axios from 'axios';
import api from './utils/api.js'


const Home = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [bannerText, setBannerText] = useState("Welcome to our website!");
  const [bannerLink, setBannerLink] = useState("https://example.com");
  const [bannerTimer, setBannerTimer] = useState(10);
  const [title, setTitle] = useState('OK');

  useEffect(() => {
    const fetchtest = async()=> {
      try{
        const response = await axios.get(`${api}/test`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          const name = response.data[0].Name;
          setTitle(name);
        }
      }catch(err){
        console.log(err)
      }
    };

    fetchtest()
  },[]);

  const handleTimeUp = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className="home">
    <h1>{title}</h1>
      <Banner
        isVisible={isBannerVisible}
        text={bannerText}
        link={bannerLink}
        timer={bannerTimer}
        onTimeUp={handleTimeUp}
      />
    </div>
  );
};

export default Home;
