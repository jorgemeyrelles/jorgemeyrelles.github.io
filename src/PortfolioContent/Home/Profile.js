import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

// import { Container } from './styles';

function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className="colz-icon">
              <a href="https://www.facebook.com/jorge.meyrelles/" target="blank">
                <img className='fa fa-facebook-square' align="center" src="https://icongr.am/simple/facebook.svg?size=30&color=D7D7D7" alt="fb_jorge.meyrelles" />
              </a>
              <a href="https://www.xing.com/profile/Jorge_Meyrelles/cv" target="blank">
                <img className='fa fa-xing-square' align="center" src="https://icongr.am/fontawesome/xing-square.svg?size=30&color=D7D7D7" alt="xing_jorgemeyrelles" />
              </a>
              <a href="https://github.com/jorgemeyrelles" target="blank">
                <img className='fa fa-github-square' align="center" src="https://icongr.am/simple/github.svg?size=30&color=D7D7D7" alt="github_jorgemeyrelles" />
              </a>
              {/* <a href='https://www.facebook.com/jorge.meyrelles'>
                <i className='fa fa-fa-facebook-square'></i>
              </a>
              <a href='https://www.xing.com/profile/Jorge_Meyrelles/cv'>
                <i className='fa fa-fa-xing-square'></i>
              </a>
              <a href='https://linkedin.com/in/jorgemeyrelles'>
                <i className='fa fa-fa-linkedin-square'></i>
              </a> */}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              Hello, I'm <span className="highlighted-text">Jorge</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🚀",
                    2000,
                    "Full Stack Developer 🤓",
                    2000,
                    "Mern Stack 💾",
                    2000,
                    "ReactJs Dev 💻",
                    2000
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Let's building applications with front end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="https://wa.me/5521994844035?&text=Oi!" target="blank">
              <button className="btn primary-btn">
                {''}
                Hire Me{' '}
              </button>
            </a>
            <a href="JorgeMeyrellesJr.pdf" download="Resume JorgeMeyrellesJr.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;