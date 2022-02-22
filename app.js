let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(a) {
    return a * 1.2;
}
function fromDollarToYen(a) {
    return a * 127.9
}

function fromYanToPound(a) {
    return a * 0.8
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };

// fromDollarToYen, fromEuroToDollar fromYanToPound