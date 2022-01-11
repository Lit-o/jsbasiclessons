const logger = function(a, b, ...rest2) {
    console.log(a, b, rest2);
}

logger('b','vi', '1', '2', '4')

// default parameters before es6
function calc(a, b) {
    b = b || 2;
    console.log(a * b)
}

// default parameters with es6
function calc2(a, b = 2) {
    console.log(a * b)
}