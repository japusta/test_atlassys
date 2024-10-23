import React from 'react';
import './Header.scss';
import logo from '../../img/logo.svg'; // Логотип
import searchIcon from '../../img/search-icon.svg'; // Иконка поиска
import settingsIcon from '../../img/settings-icon.svg'; // Иконка настроек
import notificationIcon from '../../img/notification-icon.svg'; // Иконка уведомлений
import userAvatar from '../../img/user-avatar.jpg'; // Аватар пользователя

const Header = ({ currentSection, setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <header className="header">
      <button 
        className="burger-icon" 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Меняем состояние Sidebar
      >
        ☰
      </button>
      <div className="header__logo">
        <img src={logo} className="header__logo__img" alt="BankDash Logo" />
        <h1>BankDash.</h1>
      </div>
      <h2>{currentSection}</h2> {/* Выводим текущую секцию */}
      <div className="header__search">
        <img className="header__search__icon" src={searchIcon} alt="Search Icon" />
        <input type="text" placeholder="Search for something" />
      </div>
      <div className={`header__icons ${isSidebarOpen ? 'open' : ''}`}>
        <div className="icon-wrapper">
          <img src={settingsIcon} alt="Setting" />
        </div>
        <div className="icon-wrapper">
          <img src={notificationIcon} alt="Notifications" />
        </div>
        <img src={userAvatar} alt="User Avatar" className="header__avatar" />
      </div>
    </header>
  );
};

export default Header;
