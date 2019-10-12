// == Import : npm
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// == Import : local
import './header.scss';

// == Composant
const Header = () => (
  <div id="header">

    <div className="logo">
      <Link to="/">
        <div className="logoTitle">oBlog</div>
        <div className="logoSlogan">Un simple blog</div>
      </Link>
    </div>

    <nav>
      <NavLink to="/categories">Catégories</NavLink>
      <NavLink to="/about">A propos</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>

    <div className="auth">
      <div className="search">
        <form>
        </form>
      </div>
    </div>
  </div>
);

// == Export
export default Header;
