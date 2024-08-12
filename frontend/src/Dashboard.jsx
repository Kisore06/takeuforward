import React, { useState } from 'react';
import axios from 'axios';
import api from './utils/api.js';

const BannerForm = () => {
  const [bannerText, setBannerText] = useState('');
  const [bannerLink, setBannerLink] = useState('');
  const [bannerDateTime, setBannerDateTime] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      banner_text: bannerText,
      banner_link: bannerLink,
      banner_datetime: bannerDateTime,
    };
    console.log(data);
    try {
      const response = await axios.post(`${api}/banner`, data);
      setStatusMessage('Banner updated successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      setStatusMessage('Error updating banner.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="banner-form-container">
      <h2>Update Banner Dashboard</h2>
      <form onSubmit={handleSubmit} className="form-section">
        <div className="form-section">
          <label htmlFor="bannerText" className="input-field">Banner Text:</label>
          <input
            type="text"
            id="bannerText"
            value={bannerText}
            onChange={(e) => setBannerText(e.target.value)}
            required
          />
        </div>
        <div className="form-section">
          <label htmlFor="bannerLink" className="input-field">Banner Link:</label>
          <input
            type="url"
            id="bannerLink"
            value={bannerLink}
            onChange={(e) => setBannerLink(e.target.value)}
            required
          />
        </div>
        <div className="form-section">
          <label htmlFor="bannerDateTime" className="input-field">Banner Date and Time:</label>
          <input
            type="datetime-local"
            id="bannerDateTime"
            value={bannerDateTime}
            onChange={(e) => setBannerDateTime(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default BannerForm;
