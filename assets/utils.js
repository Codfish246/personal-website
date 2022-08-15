// - @codfish246 -

//little bit of js for calculating age and updating bio in html
function updateAge() {
  var today = new Date();
  var date = new Date(2003, 01, 21, 0, 0, 1);
  var difference = (today - date) / (1000 * 60 * 60 * 24 * 365);
  var dToDisplay = difference.toFixed(0);
  document.getElementById("age").innerHTML = dToDisplay;
}

// toggles settings menu on click
function toggleSwitch() {
  var elem = document.getElementById("settings");
  if (elem.style.display == "block") {
    elem.style.display = "none";
  } else {
    elem.style.display = "block";
  }
}

// little bit of js for copying something predefined to user's clipboard on button click
function clipboardDiscord() {
  let text = "Codfish246#0075";
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Codfish246#0075 copied to clipboard");
    })
    .catch((err) => {
      alert("Codfish246#0075 \nError copying text: ", err);
    });
}

// cool stuff for the time dependant/reactive background
function setTimePicBg() {
  if (localStorage.getItem("picBg")) {
    if (localStorage.getItem("picBg") == "true") {
      var d = new Date();
      var n = d.getHours(); //change to t soon makes more sense
      if (n >= 21 || n < 2)
        $("body").css("background-image", "url('assets/night-small.webp')");
      else if (n >= 6 && n <= 10)
        $("body").css("background-image", "url('assets/sunrise.webp')");
      else if (n > 19 && n < 21)
        $("body").css("background-image", "url('assets/sunset.webp')");
      else if (n >= 11 && n <= 19)
        $("body").css("background-image", "url('assets/day-small.webp')");
      else console.log("dark sky gradient time");

      var check1 = document.getElementById("check1");
      check1.checked = true;
    } else {
      var check1 = document.getElementById("check1");
      check1.checked = false;
    }
  } else {
    localStorage.setItem("picBg", "true");
    setTimePicBg();
  }
}

// time-dependant-background settings toggle localstorage checks
function setBgOption() {
  var check1 = document.getElementById("check1");
  if (check1.checked == true) {
    localStorage.setItem("picBg", "true");
    setTimePicBg();
  } else {
    localStorage.setItem("picBg", "false");
    $("body").css("background-image", "");
  }
}

window.onload = function () {
  setTimePicBg();

  updateAge();
};
