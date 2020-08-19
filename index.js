const pages = ["enter", "page1", "page2", "page3", "page4", "page5", "page6"];

$(document).ready(function() {
  window.scrollTo(0,0);
});

$(".bttn-enter").click(function() {
  $("#enter").addClass("above").removeClass("on-screen");
  $("#page1").removeClass("below").addClass("on-screen");
});

function goBack(back) {
  var currPage = back.parentNode.id;
  var backPage = pages[pages.indexOf(currPage) - 1];

  $("#" + currPage).addClass("below").removeClass("on-screen");
  $("#" + backPage).addClass("on-screen").removeClass("above");
}

function goNext(back) {
  var currPage = back.parentNode.id;
  var nextPage = pages[pages.indexOf(currPage) + 1];

  $("#" + currPage).addClass("above").removeClass("on-screen");
  $("#" + nextPage).addClass("on-screen").removeClass("below");
}
