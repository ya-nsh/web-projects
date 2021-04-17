const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(() => {
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hrs = now.getHours();

  const degreeInSec = (sec / 60) * 360 + 90;
  const degreeInMin = (min / 60) * 360 + 90;
  const degreeInHr = (hrs / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${degreeInSec}deg)`;
  minuteHand.style.transform = `rotate(${degreeInMin}deg)`;
  hourHand.style.transform = `rotate(${degreeInHr}deg)`;
}, 1000);

// at 0s -> 0 deg
// at 60s -> 360 deg
// So, each 1s -> 6 deg
