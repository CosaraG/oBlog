// == Import : npm
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

// == Import : local
import './header.scss';

// == Composant
const Header = () => (
  <div id="header">
    <div className="header-left">
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
    </div>

    <div className="header-right">
        <form>
          <Icon name="search" color="black" size="small" />
          <input className="searchInput" type="text" placeholder="Rechercher" />
        </form>
        <div className="button">S'abonner</div>
    </div>
  </div>
);

// == Export
export default Header;
