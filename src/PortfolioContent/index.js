import React from 'react';
import { TOTAL_SCREENS } from '../utils/commonUtils';

function PortfolioContent() {
  return (
    <div className='portfolio-container'>
      {TOTAL_SCREENS.map((page) => {
        const Component = page.component;
        if (Component) {
          return <Component screenName={page.screenName} key={page.screenName} id={page.screenName} />;
        }
        return <div key={page.screenName}></div>;
      })}
    </div>
  );
}

export default PortfolioContent;