const copies = document.querySelectorAll(".p-catch__wrapper p");

const options = {
  root: null, // 今回はビューポートをルート要素とする
  rootMargin: "-50% 0px", // ビューポートの中心を判定基準にする
  threshold: 0 // 閾値は0
};

// 実行するよ
const observer = new IntersectionObserver(showElements);

// 各 .heading に到達したら発動。複数あるから forEach 使うよ。
copies.forEach((copy) => {
  observer.observe(copy);
});

function showElements(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 各 .heading に .active を加える
      entry.target.classList.add("is-active");
      // entry.target.children[0].classList.add("is-active");
    }
  });
}
