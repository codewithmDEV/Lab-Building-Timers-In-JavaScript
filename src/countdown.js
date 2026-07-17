function countdownTimer(seconds){
  let remaining = seconds;

  const timerId = setInterval(() => {
    console.log(`Time remaining: ${remaining}`);

    if (remaining <= 0){
      clearInterval(timerId);
      return;
    }
    remaining--;
  }, 1000);
  return timreId
}

module.exports = countdownTimer;