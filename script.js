const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (currentValue + 273.32).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      function updateColor(value, inputEl) {
        const temp = parseFloat(value);
        if (isNaN(temp)) {
          inputEl.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
          return;
        }
        
        const minTemp = -50;
        const maxTemp = 50;
        const percent = Math.max(0, Math.min(1, (temp - minTemp) / (maxTemp - minTemp)));

        const red = Math.floor(255 * percent);
        const blue = Math.floor(255 * (1 - percent));
        const green = 100;

        inputEl.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.4)`;
      }


      break;
    default:
      break;
  }
}