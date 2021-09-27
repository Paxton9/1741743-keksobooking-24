const getRandom = function(min , max) {
  min = 0;
  max = 10;
  if (max < 0) {
    return Math.floor(Math.random() * -max);
  }
  return Math.floor(Math.random() * max);
};

getRandom();
