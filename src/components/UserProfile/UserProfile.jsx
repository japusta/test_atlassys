import React, { useState } from 'react';
import './UserProfile.scss';
import userAvatar from '../../img/user-avater-full.png';
import Pencil from '../../img/pencil.svg';


const UserProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="user-profile">
      <div className="user-profile__header">


        <nav className={`user-profile__tabs ${isMenuOpen ? 'open' : ''}`}>
          <span className="user-profile__editing active">Edit Profile</span>
          <span className="user-profile__prefs">Preferences</span>
          <span className="user-profile__security">Security</span>
        </nav>
      </div>

      <form className="user-profile__form">
        <div className="user-profile__left">
          <div className="user-profile__image">
            <img src={userAvatar} alt="User" />
            <button className="edit-icon">
              <img src={Pencil} alt="Change" />
            </button>
          </div>
        </div>
        <div className="user-profile__right">
          <div className="form-group">
            <label className='form-group__no-up' htmlFor="userName">Your Name</label>
            <input type="text" id="userName" placeholder="Charlene Reed" />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">Email</label>
            <input type="email" id="userEmail" placeholder="charlenereed@gmail.com" />
          </div>
          <div className="form-group">
            <label htmlFor="userDob">Date of Birth</label>
            <input type="date" id="userDob" placeholder="1990-01-25" />
          </div>
          <div className="form-group">
            <label htmlFor="userAddress">Permanent Address</label>
            <input type="text" id="userAddress" placeholder="San Jose, California, USA" />
          </div>
          <div className="form-group">
            <label htmlFor="userPostal">Postal Code</label>
            <input type="text" id="userPostal" placeholder="45962" />
          </div>
        </div>

        <div className="user-profile__right user-profile__right1">
          <div className="form-group">
            <label className='form-group__no-up' htmlFor="userName">User Name</label>
            <input type="text" id="userName" placeholder="Charlene Reed" />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">Password</label>
            <input type="email" id="userEmail" placeholder="charlenereed@gmail.com" />
          </div>
          <div className="form-group">
            <label htmlFor="userDob">Present Address</label>
            <input type="text" id="userAddress" placeholder="San Jose, California, USA" />
          </div>
          <div className="form-group">
            <label htmlFor="userAddress">City</label>
            <input type="text" id="userAddress" placeholder="San Jose, California, USA" />
          </div>
          <div className="form-group">
            <label htmlFor="Country">Country</label>
            <input type="text" id="Country" placeholder="USA" />
          </div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
