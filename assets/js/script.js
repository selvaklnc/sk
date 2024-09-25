$(document).ready(function() {
    var originalText = "SK";
    var newText = "Selvakumaran Krishnan";
    var scrollDistance = 50; // Distance in pixels

    $(window).scroll(function() {
      if ($(this).scrollTop() > scrollDistance) {
        $('#header_name').text(newText);
      } else {
        $('#header_name').text(originalText);
      }
    });
  });