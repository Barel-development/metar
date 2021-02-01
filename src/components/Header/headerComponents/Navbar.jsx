import React, { useState } from 'react';
import './navbar.css';

export const Navbar = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
      <nav className="nav_mobil">
        <button
          className={menuOpened ? 'hamburger hamburger--opened' : 'hamburger'}
          aria-label="menu"
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        ></button>
        {menuOpened && (
          <ul className="menu-items">
            <li className="menu-item">
              <a href="#kontakty">Kontakty</a>
            </li>
          </ul>
        )}
      </nav>
  );
};
