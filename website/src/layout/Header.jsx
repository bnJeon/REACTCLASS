import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeTab, setActiveTab] = useState('Best');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="auth-links">
        <Link to="/login" className="nav-link text-white">로그인</Link>
        <Link to="/signup" className="nav-link text-white">회원가입</Link>
      </div>
      <Link to="/" className="glossy" style={{ display: 'block', margin: '0 auto', color:'aliceblue'}}>Glossy</Link>
      {windowWidth <= 768 && (
        <button className="toggle-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      )}
      {(isMenuOpen || windowWidth > 768) && (
        <nav className={`nav flex-column flex-sm-row text-white py-3 ${isMenuOpen ? 'show-menu' : 'hide-menu'}`}>
          <Link
            to="/best"
            className={`flex-sm-fill text-sm-center nav-link ${activeTab === 'Best' ? 'active' : ''}`}
            onClick={() => handleTabClick('Best')}
          >
            Best
          </Link>
          <Link
            to="/new"
            className={`flex-sm-fill text-sm-center nav-link ${activeTab === 'New' ? 'active' : ''}`}
            onClick={() => handleTabClick('New')}
          >
            New
          </Link>
          <Link
            to="/collection"
            className={`flex-sm-fill text-sm-center nav-link ${activeTab === 'Collection' ? 'active' : ''}`}
            onClick={() => handleTabClick('Collection')}
          >
            Collection
          </Link>
          <Link
            to="/notice"
            className={`flex-sm-fill text-sm-center nav-link ${activeTab === 'Notice' ? 'active' : ''}`}
            onClick={() => handleTabClick('Notice')}
          >
            Notice
          </Link>
        </nav>
      )}
    </div>
  );
}
