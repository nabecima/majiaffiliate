const getElement = (el) => document.querySelectorAll(el);

const countDownId = setInterval(() => {
  const days = getElement(".day");
  const hours = getElement(".hours");
  const minutes = getElement(".minutes");
  const seconds = getElement(".seconds");
  const milliseconds = getElement(".milliseconds");

  const currentTime = new Date().getTime();
  const targetTime = new Date("2023/6/19 23:59:59").getTime();
  // const targetTime = new Date().getTime();
  const gap = targetTime - currentTime;

  if (gap <= 0) {
    clearInterval(countDownId);
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
