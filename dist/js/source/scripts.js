mobileMenu();
tabs();
headerScroller();
function mobileMenu() {
  $('[rel="js-header-mobile"]').click(function () {
    $('[rel="js-header-mobile"], .b-header__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
}
function tabs() {
  $('[rel="js-tabs"]').each(function () {
    let tabWrapper = $(this).find('.b-tabs__nav');
    let tabContent = $(this).find('.b-tabs__info');
    tabWrapper.find('[rel="js-tabs-button"]').on('click', function () {
      tabWrapper.find('[rel="js-tabs-button"]').removeClass('active');
      $(this).addClass('active');
      tabContent.find('[rel="js-tabs-content"]').removeClass('active');
      tabContent
        .find('[rel="js-tabs-content"]')
        .eq($(this).index())
        .addClass('active');
    });
  });
}
function headerScroller() {
  checkHeaderPosition();
  $(window).scroll(function () {
    checkHeaderPosition();
  });
  function checkHeaderPosition() {
    if ($(window).scrollTop() >= 15) {
      $('[rel="js-header"]').addClass('is-scrolled');
    } else {
      $('[rel="js-header"]').removeClass('is-scrolled');
    }
  }
}
