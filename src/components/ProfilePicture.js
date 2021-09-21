import React from 'react';
import img from '../img/prof.jpeg';

function ProfilePicture() {
  const styleImg = {
    clipPath: 'circle(50% at 50% 50%)',
    position: 'inherit',
    zIndex: '7',
    left: '15%',
    top: '40%',
  };
  return(
    <div style={ styleImg }>
      <img width="350px" src={ img } alt="img profile" />
    </div>
  );
};

export default ProfilePicture;
