import { TOTAL_SCREENS } from './commonUtils';
import { Subject } from 'rxjs';

export default class ScrollService {
  static scrollHandler() {
    new ScrollService();
  }
  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
  }

  scrollToHireMe = () => {
    const contactmeScreen = document.getElementById('Contact Me');
    if (!contactmeScreen) {
      return false;
    }
    contactmeScreen.scrollIntoView({ behavior: 'smooth' });
  };

  scrollToHome = () => {
    const homeScreen = document.getElementById('Home');
    if (!homeScreen) {
      return false;
    }
    homeScreen.scrollIntoView({ behavior: 'smooth' });
  };
  
  isElementInView = (elem, type) => {
    const rec = elem.getBoundingClientRect();
    const elementTop = rec.top;
    const elementBottom = rec.Bottom;

    const partialVisible = elementTop < window.innerHeight && elementBottom >= 0;
    const completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
    case 'partial':
      return partialVisible;
    case 'complete':
      return completelyVisible;
    default:
      return false;
    }
  };

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) {
      return false;
    }
    for (let screen of TOTAL_SCREENS) {
      const screenFromDOM = document.getElementById(screen.screenName);
      if (!screenFromDOM) {
        continue;
      }
      const fullyVisible = this.isElementInView(screenFromDOM, 'complete');
      const partiallyVisible = this.isElementInView(screenFromDOM, 'partial');

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screenName,
          });
          screen['alreadyRendered'] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screenName,
          });
          break;
        }
      }
    }
  };
}
