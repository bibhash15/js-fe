const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const results = document.querySelector("#results");
const calculate_button = document.querySelector("#calculate");

calculate_button.addEventListener("click", () => {
  const h = height.value;
  const w = weight.value;
  if (h === "" || h < 0 || isNaN(h)) {
    results.innerHTML = `Pleaase give a valid height ${h}`;
  } else if (w === "" || w < 0 || isNaN(w)) {
    results.innerHTML = `Pleaase give a valid weight ${w}`;
  } else {
    const bmi = (w / ((h * h) / 1000)).toFixed(2);
    results.textContent = `Your BMI is ${bmi}`;
  }
});
