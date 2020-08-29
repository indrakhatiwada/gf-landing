function imgSlider(param) {
  document.querySelector(".gamefuel").src = param;
}

function changeBg(param) {
  const sec = document.querySelector(".section");
  const text = document.querySelector(".order");
  sec.style.background = param;
  text.style.color = param + "!important";
}
