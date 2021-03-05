let animationItems = document.querySelectorAll('._animation');
if (animationItems.length > 0) {
  const offset = elem => {
    const rect = elem.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  };
  const animationOnScroll = () => {
    animationItems.forEach(item => {
      const itemHeight = item.offsetHeight;
      const itemOffset = offset(item).top;
      const animationStart = 4;

      let animationItemPoint = window.innerHeight - itemHeight / animationStart;

      if (itemHeight > window.innerHeight) {
        animationItemPoint =
          window.innerHeight - window.innerHeight / animationStart;
      }

      if (
        pageYOffset > itemOffset - animationItemPoint &&
        pageYOffset < itemOffset + itemHeight
      ) {
        item.classList.add('_animate');
      } else {
        if (item.dataset.hide == 'true') {
          item.classList.remove('_animate');
        }
      }
    });
  };
  window.addEventListener('scroll', animationOnScroll);
  setTimeout(() => {
    animationOnScroll();
  }, 400);
}
