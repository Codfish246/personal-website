window.onload = function () {
  var d = new Date();
  var n = d.getHours();
  console.log("hour: " + n);
  if (n >= 21 || n < 0)
    $("body").css("background-image", "url('assets/night-small.webp')");
  else if (n >= 5 && n <= 9)
    $("body").css("background-image", "url('assets/sunrise.webp')");
  else if (n > 19 && n < 21)
    $("body").css("background-image", "url('assets/sunset.webp')");
  else $("body").css("background-image", "url('assets/day-small.webp')");
};
