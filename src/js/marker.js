// const options = {
//   root: document.querySelector("#scrollArea"),
//   rootMargin: "0px",
//   threshold: 1.0
// };

// const observer = new IntersectionObserver(callback, options);

// 着火点となる要素
const markers = document.querySelectorAll(".marker");

const options = {
  threshold: 1
};

// 実行するよ
const observer = new IntersectionObserver(showMarker);

// 各 .heading に到達したら発動。複数あるから forEach 使うよ。
markers.forEach((marker) => {
  observer.observe(marker);
});

// 要素が表示されたら実行する動作
function showMarker(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 各 .heading に .active を加える
      entry.target.classList.add("scrolled");
    }
  });
}
