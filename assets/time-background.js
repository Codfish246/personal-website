window.onload = function () {
  var d = new Date();
  var n = d.getHours();
  console.log("hour: " + n);
  if (n > 21 || n < 6)
    $("body").css("background-image", "url('assets/night-small.webp')");
  else if (n > 15 && n < 21)
    $("body").css("background-image", "url('assets/sunset.webp')");
  else $("body").css("background-image", "url('assets/day-small.webp')");
};
