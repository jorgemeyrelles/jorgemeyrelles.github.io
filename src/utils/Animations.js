export default class Animations {
  static animations() {
    return new Animations();
  }

  fadeInScreen(screenName) {
    const screen = document.getElementById(screenName);

    if (!screenName || !screen) {
      return false;
    }

    screen.style.opacity = '5';
    screen.style.transform = 'translateY(1px)';
    return this;
  };
}
