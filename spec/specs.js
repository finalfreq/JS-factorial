describe('factorial', function() {
  it("is 1 if 0!", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("shows factorial of any positive number", function() {
    expect(factorial(10)).to.equal(3628800);
  });
});
