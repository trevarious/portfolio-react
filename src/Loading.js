import React from 'react';
import './Loading.css'; // Create a separate CSS file for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
      </div>
    </div>
  );
};

export default Loading;
