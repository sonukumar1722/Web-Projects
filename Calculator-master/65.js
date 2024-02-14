let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
const calculator = document.querySelector(".container");
// const scintific = document.getElementById("sci");
// scintific.addEventListener("click", scintificCalculator);

let screenValue = "";

for (item of buttons) {

  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "•") {
      screenValue += ".";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screenValue = screenValue.replaceAll("lg(", "Math.log10(");
      screenValue = screenValue.replaceAll("ln(", "Math.log(");
      screenValue = screenValue.replaceAll("√(", "Math.sqrt(");
      screenValue = screenValue.replaceAll("π", "Math.PI");
      console.log(screenValue);
      try{
      screen.value = "= "+eval(screenValue);
      }
      catch{
        screen.value = 'Error';
      }
    } else if (buttonText == "←") {
      screenValue = screenValue.substring(0, screenValue.length - 1);
      screen.value = screenValue;
    } else if (buttonText == "π") {
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "e") {
      buttonText = Math.E;
      screenValue += `${buttonText}`.substring(0, 7);
      screen.value = screenValue;
    } else if (buttonText == "lg") {
      screenValue += "Math.log10(".replace("Math.log10(", "lg(");
      screen.value = screenValue;
    } else if (buttonText == "ln") {
      screenValue += "Math.log(".replace("Math.log(", "ln(");
      screen.value = screenValue;
    } else if (buttonText == "√x") {
      screenValue += "Math.sqrt(".replace('Math.sqrt(','√(');
      screen.value = screenValue;
    } else if (buttonText == "1/x") {
      screenValue += '(1/';
      screen.value = screenValue;
    } else if (buttonText == "xy") {
      screenValue += 'Error';
      screen.value = screenValue;
    } else if (buttonText == "x!") {
      screenValue += 'Error';
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
