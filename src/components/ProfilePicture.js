import React, { useEffect, useState } from 'react';
import img from '../img/prof.jpeg';

function ProfilePicture() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      badge();
      setStart(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const styleImg = {
    clipPath: 'circle(50% at 50% 50%)',
    position: 'inherit',
    zIndex: '7',
    left: '17%',
    top: '40%',
    transform: 'rotate(-9.67deg)',
  };

  const badge = () => {
    return (
      // <div
      //   class="badge-base LI-profile-badge"
      //   data-locale="pt_BR"
      //   data-size="large"
      //   data-theme="light"
      //   data-type="HORIZONTAL"
      //   data-vanity="jorgemeyrelles"
      //   data-version="v1"
      //   style={ styleImg }
      // >
      //   <a
      //     target="blank"
      //     class="badge-base__link LI-simple-link"
      //     href="https://br.linkedin.com/in/jorgemeyrelles?trk=profile-badge"
      //   >
          
      //   </a>
      // </div>
                
      <div style={ styleImg }>
        <img width="350px" src={ img } alt="img profile" />
      </div>
    )
  };

  const loading = () => {
    return (
      <div style={ {
        position: 'fixed',
        left: '17%',
        top: '40%',
        // right: '0',
        // bottom: '0',
        zIndex: '7',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      } }>
        <img src="https://i.gifer.com/8Etj.gif" alt="loading" />
      </div>
    )
  };

  return(
    start ? badge() : loading()
  );
};

export default ProfilePicture;
