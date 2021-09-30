
//  Первая функция , радномное целое число.

const getRandom = function (min, max) {
  min = 11;
  max = 99;
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    max = Math.ceil(max);
    min = Math.floor(min);

    return Math.floor(Math.random() * (min - max + 1)) + max;

  }

  return Math.floor(Math.random() * (max - min + 1)) + min;

};

getRandom();


//  Вторая функция , рандомное число с плавающей точкой.

const fractionNumbers = function(min , max ) {
  min = 0;
  max = 25;

  if (max < min) {
    return Number((Math.random() * (max - min + 1) + min).toFixed(5));
  }

  return Number((Math.random() * (min - max + 1) + max).toFixed(5));
};

fractionNumbers();


