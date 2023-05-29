import anime from "animejs/lib/anime.es.js";
import numeral from "numeral";

const countUpTarget = document.querySelector("#countUp");

anime({
  targets: countUpTarget,
  innerHTML: [0, 72150300],
  easing: "easeInOutSine",
  round: 1,
  duration: 2000,
  update: function (a) {
    const value = a.animations[0].currentValue;
    const formattedNumber = numeral(value).format("0,000,000");
    countUpTarget.innerHTML = formattedNumber;
  },
  complete: function (a) {
    countUpTarget.classList.add("completed");
    // console.log("completed : " + a.completed);
  }
});
