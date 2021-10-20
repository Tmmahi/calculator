const screen = document.getElementById("screen");
const button = document.querySelectorAll("button");

for (item of button) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "x") {
      buttonText = "*";
      screen.value += buttonText;
    } else if (buttonText == "C") {
      screen.value = "";
    } else if (buttonText == "=") {
      screen.value = eval(screen.value);
    } else {
      screen.value += buttonText;
    }
  });
}
