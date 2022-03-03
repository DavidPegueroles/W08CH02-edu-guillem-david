const calculateTime = (date) => {
  let timePassed;

  if (new Date(date) > Date.now()) {
    return "this tuit is from the future";
  }

  const milliseconds = Math.abs(new Date(date) - Date.now());

  const minutes = Math.floor(milliseconds / 1000 / 60);
  const hours = Math.floor((milliseconds % 86400000) / 3600000);
  const days = Math.floor(milliseconds / 86400000);

  if (minutes < 60) {
    timePassed = `${minutes} minutes`;
  } else if (hours < 24) {
    timePassed = `${hours} hours`;
  } else {
    timePassed = `${days} days`;
  }

  return `this was posted ${timePassed} ago`;
};

export default calculateTime;
