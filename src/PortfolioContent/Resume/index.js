import React from 'react';
import PropTypes from 'prop-types';
import Animations from '../../utils/Animations';
import ScrollService from '../../utils/ScrollService';
import ScreenHeading from '../../utils/ScreenHeading';

// import { Container } from './styles';

function ToResume(props) {
  const { id } = props;
  const fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== id) {
      return false;
    }
    return Animations.animations().fadeInScreen(id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn().subscribe(fadeInScreenHandler);
  console.log(fadeInSubscription);
  return (
    <div className='resume-container screen-container' id={id || ''}>
      <div className='resume-content'>
        <ScreenHeading title='Resume' subHeading='My formal bio details' />
      </div>
    </div>
  );
}

ToResume.propTypes = {
  id: PropTypes.node,
}.isRequired;

export default ToResume;
