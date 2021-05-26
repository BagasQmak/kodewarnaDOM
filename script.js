const ubahWarna = document.getElementById("ubahWarna");
const acakWarna = document.getElementById("acakWarna");
const codeWarna = document.querySelector(".codeWarna");
const codeWarna2 = document.querySelector(".codeWarna2");

ubahWarna.addEventListener("click", function () {
  document.body.classList.toggle("rebecca-purple");
});

acakWarna.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 255 + 1);
  const green = Math.floor(Math.random() * 255 + 1);
  const blue = Math.floor(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`;

  codeWarna.innerHTML = `rgb( ${red}, ${green}, ${blue})`;
});

const sliderMerah = document.querySelector('input[name="sliderMerah"]');
const sliderHijau = document.querySelector('input[name="sliderHijau"]');
const sliderBiru = document.querySelector('input[name="sliderBiru"]');

sliderMerah.addEventListener("input", function () {
  const red = sliderMerah.value;
  const green = sliderHijau.value;
  const blue = sliderBiru.value;
  document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`;

  codeWarna2.innerHTML = `rgb(${sliderMerah.value}, ${sliderHijau.value}, ${sliderBiru.value})`;
});

sliderHijau.addEventListener("input", function () {
  const red = sliderMerah.value;
  const green = sliderHijau.value;
  const blue = sliderBiru.value;
  document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`;

  codeWarna2.innerHTML = `rgb(${sliderMerah.value}, ${sliderHijau.value}, ${sliderBiru.value})`;
});

sliderBiru.addEventListener("input", function () {
  const red = sliderMerah.value;
  const green = sliderHijau.value;
  const blue = sliderBiru.value;
  document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`;

  codeWarna2.innerHTML = `rgb(${sliderMerah.value}, ${sliderHijau.value}, ${sliderBiru.value})`;
});
