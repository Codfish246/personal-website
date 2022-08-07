window.onload = function () {
  var d = new Date();
  var n = d.getHours();
  console.log("hour: " + n);
  if (n >= 21 || n < 1)
    $("body").css("background-image", "url('assets/night-small.webp')");
  else if (n >= 6 && n <= 9)
    $("body").css("background-image", "url('assets/sunrise.webp')");
  else if (n > 19 && n < 21)
    $("body").css("background-image", "url('assets/sunset.webp')");
  else if (n >= 10 && n <= 19)
    $("body").css("background-image", "url('assets/day-small.webp')");
  else console.log("non-image pitch-black sky background set");
};
