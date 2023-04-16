describe("pow", function() {

    it("возводит в степень n", function() {
        assert.equal(pow(1, 0), 1);
        assert.equal(pow(3, 2), 9);
        assert.equal(pow(12, 2), 144);
        assert.equal(pow(4, 3), 64);
    });

});


describe("fib", function() {

    it("возводит в степень n", function() {
        assert.equal(fib(4), 3);
        assert.equal(fib(7), 13);
        assert.equal(fib(77), 5527939700884757);
    });

});