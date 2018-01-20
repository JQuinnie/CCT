// initial starter file

// Need logic to use jquery on click and ajax for frontend to backend interaction


/*	Page Preloader */

$(window).on("load", function() {
  $('#preloader').fadeOut('slow', function() {
    $(this).remove();
  });
});