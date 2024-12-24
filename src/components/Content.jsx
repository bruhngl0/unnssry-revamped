import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/content.scss"

const Content = ({ img, des, link }) => {
  return (
    <div className="content-container">
      <img src={img} alt={des} className="content-image" />
      <div className="content-overlay">
        <p className="content-description">{des}</p>
        <Link to={link}>
          <button className="content-button">discover now</button>
        </Link>
      </div>
    </div>
  );
};

export default Content;