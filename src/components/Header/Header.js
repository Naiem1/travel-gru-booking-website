import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Logo1 from '../../Logo1.png'


const Header = () => {
  return (
    <header className="Header">
      <nav className="nav__bar">
        <div className="navbar__logo">
          <img src={Logo1} alt=""/>
        </div>
        <div className="navbar__search">
          <input type="text" className="navbar__searchInput" placeholder="Search your Destination..." />
          <SearchIcon className="searchInput__icon"/>
        </div>
        <ul className="nav__menu">
          <li className="nav__item"><a className="nav__link" href="#new">News</a></li>
          <li className="nav__item"><a className="nav__link" href="#destination">Destination</a></li>
          <li className="nav__item"><a className="nav__link" href="#blog">Blog</a></li>
          <li className="nav__item"><a className="nav__link" href="#contact">Contact</a></li>
          <li className="nav__item"><a id="login__highlight" className="nav__link" href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

