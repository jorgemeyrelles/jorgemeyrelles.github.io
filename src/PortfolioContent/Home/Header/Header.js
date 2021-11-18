import React from 'react';
import { useHistory } from 'react-router';
import '../Profile.css';

// import { Container } from './styles';

function Header() {
  const history = useHistory();
  return (
    <div style={ { margin: '10px 0', width: '100%', height: '50px' } }>
        <nav className="profile-options">
          <div className="btn highlighted-btn">About me</div>
          <div className="btn highlighted-btn">Skills</div>
          <div
            role="button"
            tabIndex="0"
            onKeyPress={ () => history.push('/portifolio') }
            onClick={ () => history.push('/portifolio') }
            className="btn highlighted-btn"
          >
            Portfolio
          </div>
          <div className="btn highlighted-btn">Contact me</div>
        </nav>
      </div>
  );
}

export default Header;