$(document).ready(function () {
  animateDiv(".cost1");
  animateDiv(".cost2");
  animateDiv(".aconst1");
  animateDiv(".aconst2");
  animateDiv(".aconst3");
});

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 10000, function () {
    animateDiv(myclass);
  });
}
