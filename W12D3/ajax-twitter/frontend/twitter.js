const followToggle = require ("./follow_toggle");


$(function () {
  $(".follow-toggle").each((i, el) => {
    new followToggle(el);
  });
  // const renderButtons = function (button) {
  //   return $("<li>").html(
  //     $("<button>")
  //       .attr("class", "follow-toggle")
  //       .text("Follow")
  //   );
  // };
});

