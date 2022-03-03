const calculateTime = (date) => {
  let timePassed;

  const milliseconds = Math.abs(new Date(date) - Date.now());
  const minutes = Math.round(((milliseconds % 86400000) % 3600000) / 60000);
  const hours = Math.floor((milliseconds % 86400000) / 3600000);
  const days = Math.floor(milliseconds / 86400000);

  if (minutes < 60) {
    timePassed = `${minutes} minutes`;
  } else if (hours < 24) {
    timePassed = `${hours} hours`;
  } else {
    timePassed = `${days} days`;
  }

  return timePassed;
};

export default calculateTime;
