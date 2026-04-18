import $ from "jquery";

export function initializeScroll() {
  $(document).ready(function () {
    $('#menu-bar a').on('click', function (event) {
      const href = $(this).attr('href');

      if (!href || href.startsWith('#/')) {
        return;
      }

      // Prevent default anchor click behavior
      event.preventDefault();
      // Get the target section based on the href attribute of the clicked anchor
      let target = $(href);
      // Check if the target section exists
      if (target.length) {
        // Calculate the offset to scroll to, considering the height of the fixed menu
        let offset = target.offset().top - $('#menu-bar').outerHeight();
        // Animate scrolling to the target section
        $('html, body').stop().animate({
          scrollTop: offset
        }, 1000);
      }
    });
  });
}
