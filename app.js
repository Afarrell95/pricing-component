let slide = document.querySelector(".switch");
let monthly = document.querySelector("#monthly");
let annual = document.querySelector("#annual");

function showPrice(slide) {
  if (slide.checked) {
    // annual.classList.add("hidden");
    // monthly.classList.remove("hidden");
    console.log("monthly");
  } else {
    // monthly.classList.add("hidden");
    // annual.classList.remove("hidden");
    console.log("annual");
  }
}
