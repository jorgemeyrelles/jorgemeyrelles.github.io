/* eslint-disable import/no-cycle */
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Resume from '../pages/Resume';

export const TOTAL_SCREENS = [
  {
    screenName: 'Home',
    component: Home,
  },
  {
    screenName: 'About Me',
    component: AboutMe,
  },
  {
    screenName: 'Resume',
    component: Resume,
  },
];

export const GET_SCREEN_INDEX = (screen) => {
  if (!screen) {
    return -1;
  }
  for (let i = 0; i < TOTAL_SCREENS.length; i += 1) {
    if (TOTAL_SCREENS[i].screenName === screen) {
      return i;
    }
  }
  return -1;
};