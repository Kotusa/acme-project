function animateButtons() {
  let button = $('.js-button');
  button.each(function () {
    let container = $(this).find('.b-button__container');

    function removeElement(element) {
      element.remove();
    }

    function renderElement(posX, posY) {
      let circle = document.createElement('span');
      $(circle).addClass('b-button__circle');
      $(circle).css({
        left: `${posX}px`,
        top: `${posY}px`,
      });
      container.append(circle);
      setTimeout(function () {
        removeElement(circle);
      }, 1500);
    }

    function handleButtonClick(event) {
      let offset = event.target.getBoundingClientRect();
      let posX = event.pageX - offset.left;
      let posY = event.pageY - offset.top;
      renderElement(posX, posY);
    }

    $(this).on('mousedown', handleButtonClick);
  });
}
animateButtons();
