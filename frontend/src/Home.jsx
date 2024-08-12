import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import axios from 'axios';
import api from './utils/api.js';
import Dashboard from './Dashboard';

const Home = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [bannerText, setBannerText] = useState("Welcome to our website!");
  const [bannerLink, setBannerLink] = useState("https://example.com");
  const [bannerEndTime, setBannerEndTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showViewBannerButton, setShowViewBannerButton] = useState(false);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(`${api}/banner`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          const lastItem = response.data[response.data.length - 1];
          const btext = lastItem.banner_text;
          const blink = lastItem.banner_link;
          const bannerTime = lastItem.banner_time; 

          setBannerText(btext);
          setBannerLink(blink);
          setBannerEndTime(new Date(bannerTime));
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchBanner();
  }, []);

  useEffect(() => {
    if (bannerEndTime) {
      const intervalId = setInterval(() => {
        const now = new Date();
        const timeDifference = bannerEndTime - now;

        if (timeDifference <= 0) {
          setTimeLeft(0);
          setIsBannerVisible(false);
          setShowViewBannerButton(true);
          clearInterval(intervalId);
        } else {
          setTimeLeft(Math.ceil(timeDifference / 1000));
        }
      }, 1000);

      return () => clearInterval(intervalId); 
    }
  }, [bannerEndTime]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    let timeString = '';
    if (days > 0) timeString += `${days}d `;
    if (hours > 0 || days > 0) timeString += `${hours}h `;
    timeString += `${minutes}m ${secs}s`;

    return timeString;
  };

  const handleTimeUp = () => {
    setIsBannerVisible(false);
    setShowViewBannerButton(true);
  };

  const handleClose = () => {
    setIsBannerVisible(false);
    setShowViewBannerButton(true);
  };

  const handleShowBanner = () => {
    setIsBannerVisible(true);
    setShowViewBannerButton(false);
    console.log(showViewBannerButton)
  };

  return (
    <div className="home">
      <h1 className='title'>Example task:</h1>
      {isBannerVisible ? (
        <Banner
          isVisible={isBannerVisible}
          text={bannerText}
          link={bannerLink}
          timer={formatTime(timeLeft)}
          onTimeUp={handleTimeUp}
          onClose={handleClose}
        />
      ) : (
        <button onClick={handleShowBanner} className='title submit-button'>View Banner</button>
      )}
      <Dashboard />
    </div>
  );
};

export default Home;
