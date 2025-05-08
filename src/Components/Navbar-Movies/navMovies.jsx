import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "./navMovies.css"

const Navbarmovies = ({ setMovieType }) => {
  const [activeLink, setActiveLink] = useState('popular');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMovieType(link);
  };

  const links = [
    { key: 'popular', label: 'Popular', icon: 'bi-star-fill' },
    { key: 'topRated', label: 'Top Rated', icon: 'bi-trophy-fill' },
    { key: 'upcoming', label: 'Upcoming', icon: 'bi-calendar2-event-fill' },
  ];

  return (
    <nav className="navbarmovies navbar navbar-dark  shadow-lg overflow-hidden py-2  ">
      <div className="container-fluid ">
        <ul className="navbar-nav mx-auto d-flex flex-row   gap-2">
          {links.map((link) => (
            <li key={link.key} className="nav-item">
              <button
                className={`btn btn-link text-light d-flex align-items-center gap-2 fw-bold fs-5 ${activeLink === link.key ? 'text-danger active-link' : 'text-white'}`}
                onClick={() => handleLinkClick(link.key)}
                style={{
                  border: 'none',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease-in-out',
                  padding: '8px 16px',
                }}
              >
                <i className={`bi ${link.icon} fs-4`}></i>
                <span>{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbarmovies;
