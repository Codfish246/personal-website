//little bit of js for copying something predefined to user's clipboard on button click - @codfish246
window.onload = function () {
  document.getElementById("discordcopy").onclick = function () {
    let text = "Codfish246#0075";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Codfish246#0075 copied to clipboard");
      })
      .catch((err) => {
        alert("Error copying text: ", err);
      });
  };
};
