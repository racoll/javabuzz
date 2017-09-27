describe("Javabuzz", function() {

  var javabuzz;

    beforeEach(function() {
      javabuzz = new Javabuzz();
    });

  describe("knows when a number is", function() {

    it("divisible by 3", function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("divisble by 5", function() {
      expect(javabuzz.isDivisibleByFive(15)).toBe(true);
    });

    it("divisible by 10", function() {
      expect(javabuzz.isDivisibleByTen(20)).toBe(true);
    });

  });

  describe("knows when a number is not", function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it("divisible by 5", function() {
      expect(javabuzz.isDivisibleByFive(7)).toBe(false);
    });

    it("divisible by 10", function() {
      expect(javabuzz.isDivisibleByTen(15)).toBe(false);
    });

  });

});
