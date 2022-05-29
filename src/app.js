let sliders = document.querySelectorAll('input[type="range"]');
let output = document.querySelectorAll("#output");
output = [...output];
// output[0].innerHTML = 'fdsfdsf'
// console.log();
let sliderColor = "#85afff";
sliders.forEach((slider, index) => {
  output[index].innerHTML = slider.value;
  slider.style.background = `linear-gradient(90deg, ${sliderColor} ${slider.value}%, #eee ${slider.value}%)`;

  slider.addEventListener(
    "input",
    function () {
      output[index].innerHTML = slider.value;
      slider.style.background = `linear-gradient(90deg, ${sliderColor} ${this.value}%, #eee ${this.value}%)`;
    },
    false
  );
});
