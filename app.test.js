const { fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One euro should be 127.9 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1)).toBe(127.9);
})

test("One euro should be 127.9 yen", function(){
    const { fromYanToPound } = require('./app.js')
    expect(fromYanToPound(1)).toBe(0.8);
})

