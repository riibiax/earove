import $ from "jquery";

export function initializeScroll() {
  $(document).ready(function () {
    $('#menu-bar a').on('click', function (event) {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Get the target section based on the href attribute of the clicked anchor
      let target = $($(this).attr('href'));
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
