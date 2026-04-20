import $ from "jquery";

/**
 * Smooth-scrolls same-page menu anchors while leaving React hash routes untouched.
 */
export function initializeScroll() {
  $(document).ready(function () {
    $('#menu-bar a').on('click', function (event) {
      const href = $(this).attr('href');

      if (!href || href.startsWith('#/')) {
        return;
      }

      event.preventDefault();
      let target = $(href);

      if (target.length) {
        let offset = target.offset().top - $('#menu-bar').outerHeight();

        $('html, body').stop().animate({
          scrollTop: offset
        }, 1000);
      }
    });
  });
}
