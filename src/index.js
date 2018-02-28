module.exports = function getZerosCount(number) {
    let sum = 0;
    let factor = 5;
    while (factor <= number) {
        sum += Math.trunc(number / factor);
        factor = factor * 5;
    }

    return sum;
}
