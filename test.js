describe("pow", function() {

    it("возводит в степень n", function() {
        assert.equal(pow(1, 0), 1);
        assert.equal(pow(3, 2), 9);
        assert.equal(pow(12, 2), 144);
        assert.equal(pow(4, 3), 64);
    });

});


describe("fib", function() {

    it("числа Фибоначчи", function() {
        assert.equal(fib(4), 3);
        assert.equal(fib(7), 13);
        assert.equal(fib(77), 5527939700884757);
    });

});


describe("find", function() {

    it("имена из списка", function() {
        let array = ['Вадик', 'Владислав', 'Ялик']
        assert.equal(find('Вадик', array), 0);
        assert.equal(find('Владислав', array), 1);
        assert.equal(find('Ялик', array), 2);
    });

});