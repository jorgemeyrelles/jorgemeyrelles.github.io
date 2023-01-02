import React, { useState } from 'react';
// import { useHistory } from 'react-router';
// import '../Profile/Profile.css';
import './Header.css';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../utils/commonUtils';
import ScrollService from '../../../utils/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Container } from './styles';

function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOption, setShowHeaderOption] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) {
      return;
    }
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) {
      return;
    }
  };

  let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);
  console.log(currentScreenSubscription);

  const getHeaderOptions = () => {
    return (
      TOTAL_SCREENS.map((screen, index) => (
        <div
          key={screen.screenName}
          className={getHeaderOptionsClass(index)}
          tabIndex="0"
          onKeyDown={() => switchScreen(index, screen)}
          onClick={() => switchScreen(index, screen)}
        >
          <span>{screen.screenName}</span>
        </div>
      ))
    );
  };

  const getHeaderOptionsClass = (index) => {
    let classes = 'header-option';
    if (index < (TOTAL_SCREENS.length - 1)) {
      classes += 'header-option-seperator';
    }

    if (index === selectedScreen) {
      classes += 'selected-header-option';
    }
    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screenName);
    if (!screenComponent) {
      return;
    }

    screenComponent.scrollIntoView({ behavior: 'smooth' });
    setSelectedScreen(index);
    setShowHeaderOption(false);
  };

  console.log(showHeaderOption);

  return (
    <div
      className='header-container'
      tabIndex="0"
      onKeyDown={() => setShowHeaderOption(!showHeaderOption)}
      onClick={() => setShowHeaderOption(!showHeaderOption)}
    >
      <div className='header-parent'>
        <div
          className='header-hamburguer'
          tabIndex="0"
          onKeyDown={() => setShowHeaderOption(!showHeaderOption)}
          onClick={() => setShowHeaderOption(!showHeaderOption)}
        >
          <FontAwesomeIcon className='header-hamburguer-bars' icon={faBars} />
        </div>
        <div className='header-logo'>
          <span>Jorge_</span>
        </div>
        <div
          className={showHeaderOption ? 'header-options show-hamburguer-options' : 'header-options'}
        >
          {console.log(showHeaderOption, getHeaderOptions())}
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
  // const history = useHistory();
  // return (
  //   <div style={ { display: 'flex', margin: '10px 0', width: '100%', height: '50px' } }>
  //     <nav className="profile-options">
  //       <div
  //         role="button"
  //         tabIndex="0"
  //         onKeyDown={ () => {} }
  //         onClick={ () => {} }
  //         className="btn highlighted-btn"
  //       >
  //           About me
  //       </div>
  //       <div className="btn highlighted-btn">Skills</div>
  //       <div
  //         role="button"
  //         tabIndex="0"
  //         onKeyDown={ () => history.push('/portfolio') }
  //         onClick={ () => history.push('/portfolio') }
  //         className="btn highlighted-btn"
  //       >
  //           Portfolio
  //       </div>
  //       <div className="btn highlighted-btn">Contact me</div>
  //     </nav>
  //     {/* <div style={ { position: 'absolute', right: '5%' } } className="profile-options">
  //         <div
  //           role="button"
  //           tabIndex="0"
  //           onKeyPress={ () => history.push('/') }
  //           onClick={ () => history.push('/') }
  //           className="btn highlighted-btn"
  //         >
  //           Home
  //         </div>
  //       </div> */}
  //   </div>
  // );
}

export default Header;