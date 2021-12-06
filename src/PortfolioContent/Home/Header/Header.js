import React from 'react';
import { useHistory } from 'react-router';
import '../Profile.css';

// import { Container } from './styles';

function Header() {
  const history = useHistory();
  return (
    <div style={ { display: 'flex', margin: '10px 0', width: '100%', height: '50px' } }>
        <nav className="profile-options">
          <div
            role="button"
            tabIndex="0"
            onKeyPress={ () => history.push('/aboutme') }
            onClick={ () => history.push('/aboutme') }
            className="btn highlighted-btn"
          >
            About me
          </div>
          <div className="btn highlighted-btn">Skills</div>
          <div
            role="button"
            tabIndex="0"
            onKeyPress={ () => history.push('/portfolio') }
            onClick={ () => history.push('/portfolio') }
            className="btn highlighted-btn"
          >
            Portfolio
          </div>
          <div className="btn highlighted-btn">Contact me</div>
        </nav>
        {/* <div style={ { position: 'absolute', right: '5%' } } className="profile-options">
          <div
            role="button"
            tabIndex="0"
            onKeyPress={ () => history.push('/') }
            onClick={ () => history.push('/') }
            className="btn highlighted-btn"
          >
            Home
          </div>
        </div> */}
      </div>
  );
}

export default Header;