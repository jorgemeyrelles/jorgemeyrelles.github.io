import React from 'react';
import img from '../img/prof.jpeg';

function ProfilePicture() {
  const styleImg = {
    // clipPath: 'circle(50% at 50% 50%)',
    position: 'inherit',
    zIndex: '7',
    left: '17%',
    top: '40%',
    transform: 'rotate(-9.67deg)',
  };
  return(
    <div
      class="badge-base LI-profile-badge"
      data-locale="pt_BR"
      data-size="large"
      data-theme="light"
      data-type="HORIZONTAL"
      data-vanity="jorgemeyrelles"
      data-version="v1"
      style={ styleImg }
    >
      <a
        target="blank"
        class="badge-base__link LI-simple-link"
        href="https://br.linkedin.com/in/jorgemeyrelles?trk=profile-badge"
      >
        
      </a>
    </div>
              
    // <div style={ styleImg }>
    //   <img width="350px" src={ img } alt="img profile" />
    // </div>
  );
};

export default ProfilePicture;
