const secondHand = document.querySelector('.second-hand');
setInterval(() => {
  const now = new Date();
  const sec = now.getSeconds();

  const degSec = (sec / 60) * 360;
  //   console.log(degSec);
  //   console.log(sec);
}, 1000);

// at 0s -> 0 deg
// at 60s -> 360 deg
// So, each 1s -> 6 deg
