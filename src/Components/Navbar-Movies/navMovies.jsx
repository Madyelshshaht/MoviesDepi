import React, { useState } from 'react';
import './navMovies.css';

const Navbarmovies = ({ setMovieType }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    if (activeLink === link) {
      setActiveLink(null);
      setMovieType(null); 
    } else {
      setActiveLink(link);
      setMovieType(link); 
    }
  };

  return (
    <nav className="navbar">

      <h1>Movies</h1>

      <div className="navbar_links">
        <a
          href="#"
          className={activeLink === 'popular' ? 'active' : ''}
          onClick={() => handleLinkClick('popular')}
        >
          Popular
        </a>
        <a
          href="#"
          className={activeLink === 'topRated' ? 'active' : ''}
          onClick={() => handleLinkClick('topRated')}
        >
          Top Rated
        </a>
        <a
          href="#"
          className={activeLink === 'upcoming' ? 'active' : ''}
          onClick={() => handleLinkClick('upcoming')}
        >
          Upcoming
        </a>
      </div>
      
    </nav>
  );
};

export default Navbarmovies;
