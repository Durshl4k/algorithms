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


describe("quadratic_equation", function() {

    it("квадратные уравнения", function() {
        assert.equal(quadratic_equation(2, 6, 0), 0, -3);
        assert.equal(quadratic_equation(1, 4, 4), null, -2);
        assert.equal(quadratic_equation(13, -5, 1), null, null);
    });

});


describe("module", function() {

    it("модуль числа", function() {
        assert.equal(module(-123), 123);
        assert.equal(module(0), 0);
        assert.equal(module(98), 98);
    });

});


describe("point_logic", function() {

    it("находится ли число в диапазоне", function() {
        assert.equal(point_logic(3,9,7), true);
        assert.equal(point_logic(3,9,11), false);
        assert.equal(point_logic(1,100,34), true);
    });

});


describe("swap", function() {

    it("меняет числа местами в списке", function() {
        let array = [1,2,3,4,5]
        assert.equal(swap(array, 2, 3), '1,2,4,3,5');
    });

});


describe("palindrom", function() {

    it("проверяет является ли слово палиндромом", function() {
        assert.equal(palindrom('дед'), true);
        assert.equal(palindrom('тима'), false);
        assert.equal(palindrom('12321'), true);

    });

});


// describe("iter_bin_search", function() {

//     it("итерационный бинарный поиск", function() {
//         let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
//         assert.equal(iter_bin_search(array, 11), 11);
//     });

// });


describe("iter_bin_search", function() {

    it("итерационный бинарный поиск", function() {
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        assert.equal(iter_bin_search(array, 8), 8);
        let array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        assert.equal(iter_bin_search(array2, 8), 8);
            



    });
});