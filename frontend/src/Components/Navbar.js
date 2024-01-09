import React from 'react';
import LogoImage from './Icon.png'
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="top-header">
          <nav className="menu" id="top-menu">
            <ul>
            <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About us</li></a>
                    <a href="/contact"><li>Contact us</li></a>
            </ul>
          </nav>
          <img
  src={LogoImage}
  alt="Logo"
  className="logo-image"
  style={{ width: '80px', height: 'auto', alignSelf: 'center' }}
/>
          <div className="header-links">
            <a href="/cart/" className="basket-link">
              <span className="material-symbols-outlined basket">shopping_basket</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}