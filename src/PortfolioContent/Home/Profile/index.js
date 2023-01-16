import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
import { FaFacebook, FaGithub, FaXingSquare } from 'react-icons/fa';

// import { Container } from './styles';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div>
              <a
                href="https://www.facebook.com/jorge.meyrelles/"
                target="blank"
              >
                <FaFacebook
                  size="1.8em"
                  className="colz-icon"
                  title="fb_jorge.meyrelles"
                />
              </a>
              <a
                style={{ margin: '0 10px' }}
                href="https://www.xing.com/profile/Jorge_Meyrelles/cv"
                target="blank"
              >
                <FaXingSquare
                  size="1.8em"
                  className="colz-icon"
                  title="xing_jorgemeyrelles"
                />
              </a>
              <a href="https://github.com/jorgemeyrelles" target="blank">
                <FaGithub
                  size="1.8em"
                  className="colz-icon"
                  title="github_jorgemeyrelles"
                />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              Hello, I&apos;m <span className="highlighted-text">Jorge</span>
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
                    'Ethusiastic Dev 🚀',
                    2000,
                    'Full Stack Developer 🤓',
                    2000,
                    'Mern Stack 💾',
                    2000,
                    'ReactJs Dev 💻',
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Let&apos;s building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="https://wa.me/5521994844035?&text=Oi!" target="blank">
              <button type='button' className="btn primary-btn">
                {''}
                Hire Me{' '}
              </button>
            </a>
            <a
              href="JorgeMeyrellesJr.pdf"
              download="Resume JorgeMeyrellesJr.pdf"
            >
              <button type='button' className="btn highlighted-btn">
                Get Resume
              </button>
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
