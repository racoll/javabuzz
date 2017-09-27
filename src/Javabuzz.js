var Javabuzz = function() {};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0 && number % 10 !== 0);
};

Javabuzz.prototype.isDivisibleByTen = function(number) {
  return (number % 10 === 0);
};
