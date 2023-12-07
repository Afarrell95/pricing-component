const slide = document.querySelector("input[type='checkbox']");

slide.addEventListener("change", function () {
  const plans = document.querySelectorAll(".price");

  plans.forEach(function (plan) {
    if (slide.checked) {
      if (plan.id.includes("monthly")) {
        plan.classList.remove("hidden");
      } else {
        plan.classList.add("hidden");
      }
    } else {
      if (plan.id.includes("annual")) {
        plan.classList.remove("hidden");
      } else {
        plan.classList.add("hidden");
      }
    }
  });
});
