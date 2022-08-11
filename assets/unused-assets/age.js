//little bit of js for calculating age and updating bio in html - @codfish246
window.onload = function () {
  var today = new Date();
  var date = new Date(2003, 01, 21, 0, 0, 1);
  var difference = (today - date) / (1000 * 60 * 60 * 24 * 365);
  var dToDisplay = difference.toFixed(0);
  document.getElementById("age").innerHTML = dToDisplay;
};
