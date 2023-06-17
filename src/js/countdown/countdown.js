import timer from "./timer.json";
const getElement = (el) => document.querySelectorAll(el);

const countDownId = setInterval(() => {
  const days = getElement(".day");
  const hours = getElement(".hours");
  const minutes = getElement(".minutes");
  const seconds = getElement(".seconds");
  const milliseconds = getElement(".milliseconds");

  const currentTime = new Date().getTime();
  const targetTime = new Date(`${timer.year}/${timer.month}/${timer.day} 23:59:59`).getTime();
  // const targetTime = new Date().getTime();
  const gap = targetTime - currentTime;

  if (gap <= 0) {
    clearInterval(countDownId);
    const insertHtml = `<div class="p-finished">
      <p>
        マジアフィの
        <br />
        募集は終了しました
      </p>
      <div>
        <p>ご相談・ご質問はLINEにてご連絡お願いします。</p>
        <span>↓↓↓</span>
        <p>
          <a href="#">お問い合わせはこちら</a>
        </p>
      </div>
    </div>`;
    document.getElementById("countDown").innerHTML = insertHtml;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  const textMillisecond = Math.floor(gap);

  for (let i = 0; i < 2; i++) {
    // console.log(i);
    days[i].innerHTML = textDay;
    hours[i].innerHTML = textHour;
    minutes[i].innerHTML = textMinute;
    seconds[i].innerHTML = textSecond;
    milliseconds[i].innerHTML = String(textMillisecond).slice(-3, -1);
  }
}, 1);
