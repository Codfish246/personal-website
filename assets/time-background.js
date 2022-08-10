window.onload = function () {
  if (localStorage.getItem("picBg")) {
	  if (localStorage.getItem("picBg") == "true") {
      var d = new Date();
      var n = d.getHours();
      //console.log("hour: " + n);
      if (n >= 21 || n < 1)
        $("body").css("background-image", "url('assets/night-small.webp')");
      else if (n >= 6 && n <= 9)
        $("body").css("background-image", "url('assets/sunrise.webp')");
      else if (n > 19 && n < 21)
        $("body").css("background-image", "url('assets/sunset.webp')");
      else if (n >= 10 && n <= 19)
        $("body").css("background-image", "url('assets/day-small.webp')");
      else console.log("non-image dark bg set");

      var check1 = document.getElementById("check1");
      check1.checked = true;
    } else {
      console.log("reactive bg set to off");
      var check1 = document.getElementById("check1");
      check1.checked = false;
      //return;
    }
  } else {
    localStorage.setItem("picBg", "true");
    onload();
    console.log("picBg set to true by default");
  }

};
