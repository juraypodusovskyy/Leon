class Slider {
  constructor({
    pagesSelector = null,
    buttonsSelector = null,
    nextSelector = null,
    prevSelector = null,
    activeClass = '',
    autoplay = false
  } = {}) {
    this.buttons = document.querySelectorAll(buttonsSelector);
    this.pages = document.querySelector(pagesSelector);
    this.next = document.querySelector(nextSelector);
    this.prev = document.querySelector(prevSelector);
    this.slides = Array.from(this.pages.children);
    this.slideIndex = 0;
    this.activeClass = activeClass;
    this.autoplay = autoplay;
  }
}
  
export {Slider};
  