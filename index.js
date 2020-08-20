const pages = ["enter", "page1", "page2", "page3", "page4", "page5", "page6"];
var i = 1;

$(document).ready(function() {
  window.scrollTo(0,0);
});

$(".bttn-enter").click(function() {
  $("#" + pages[i - 1]).addClass("above").removeClass("on-screen");
  $("#" + pages[i]).addClass("on-screen").removeClass("below");
  var playPages = window.setInterval(function() {
    $("#" + pages[i]).addClass("above").removeClass("on-screen");
    $("#" + pages[i + 1]).addClass("on-screen").removeClass("below");
    i++;
  }, 5000);
  window.setTimeout(function() {
    clearInterval(playPages);
  }, 25000);
});
