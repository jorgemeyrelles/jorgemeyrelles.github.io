import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function ScreenHeading(props) {
  return (
    <div className='heading-container'>
      <div className='screen-heading'>
        <span>{props.title}</span>
      </div>
      {
        (props.subHeading) ? (
          <div className='screen-sub-heading'>
            <span>{props.subHeading}</span>
          </div>
        ) : <div></div>
      }
      <div className='heading-seperator'>
        <div className='seperator-line'>
          <div className='seperator-blob'>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

ScreenHeading.propTypes = {
  title: PropTypes.string,
  subHeading: PropTypes.string,
}.isRequired;

export default ScreenHeading;
