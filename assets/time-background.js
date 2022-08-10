window.onload = function () {
  if (localStorage.getItem("picBg")) {
    if (localStorage.getItem("picBg") == "true") {
      var d = new Date();
      var n = d.getHours();
      if (n >= 21 || n < 1)
        $("body").css("background-image", "url('assets/night-small.webp')");
      else if (n >= 6 && n <= 9)
        $("body").css("background-image", "url('assets/sunrise.webp')");
      else if (n > 19 && n < 21)
        $("body").css("background-image", "url('assets/sunset.webp')");
      else if (n >= 10 && n <= 19)
        $("body").css("background-image", "url('assets/day-small.webp')");
      else console.log("dark gradient time");

      var check1 = document.getElementById("check1");
      check1.checked = true;
    } else {
      var check1 = document.getElementById("check1");
      check1.checked = false;
    }
  } else {
    localStorage.setItem("picBg", "true");
    onload();
  }
};

function setBgOption() {
  var check1 = document.getElementById("check1");
  if (check1.checked == true) {
    localStorage.setItem("picBg", "true");
    onload();
  } else {
    localStorage.setItem("picBg", "false");
    $("body").css("background-image", "");
  }
}

//let check = document.querySelector('input#check');
