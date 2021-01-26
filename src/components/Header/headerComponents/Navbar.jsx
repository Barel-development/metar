import { React, useState } from 'react';
import './navbar.css';

export const NavBar = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <nav className="nav_mobil">
        <button
          className={menuOpened ? 'hamburger hamburger--opened' : 'hamburger'}
          aria-label="menu"
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menuOpened && (
          <ul className="menu-items">
            {props.showLPLinks && <li>Kontakty</li>}
          </ul>
        )}
      </nav>

      <nav className="nav_desktop">
        <ul className="menu-items menu-items-desktop">
          {props.showLPLinks && <li>Kontakty</li>}
        </ul>
      </nav>
    </>
  );
};
