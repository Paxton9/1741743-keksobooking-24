//  Первая функция , радномное целое число.

const getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    [max, min] = [min, max];
  }
  if (min < 0 || max < 0) {
    throw new Error('Нельзя использовать отрицательные числа');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandom(2 , 15);

//  Вторая функция , рандомное число с плавающей точкой.

const getFractionNumbers = function(min , max , symbols ) {
  if (max < min) {
    [max, min] = [min, max];
  }
  return Number((Math.random() * (max - min) + min).toFixed(symbols));
};
getFractionNumbers(3.2 , 7.7 , 3);
