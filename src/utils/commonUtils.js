import Home from '../pages/Home';

export const TOTAL_SCREENS = [
  {
    screenName: 'Home',
    component: Home,
  }
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