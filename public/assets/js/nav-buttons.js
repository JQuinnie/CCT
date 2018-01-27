// NAV BUTTONS
$(document).ready(function() {
  if (userData.firstname) {
    $(".btn-logout").show();
    $(".btn-btn-primary").hide();
    $(".btn-success").hide();
  } else {
    $(".btn-logout").hide();
    $(".btn-btn-primary").show();
    $(".btn-success").show();
  }
})