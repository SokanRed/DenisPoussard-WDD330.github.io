let total = 0;

function addition(x) {
    total += x;
    return total;
}

function substraction(x) {
    total -= x;
    return total;
}

function multiplication(x) {
    if (total === 0) {
        return (total = x);
        total *= x;
    } else {
        return total;
    }
}

function division(x) {
    if (total === 0) {
        return (total = x);
        total /= x;
    } else {
        return total;
    }
}

function reset() {
    total = 0;
}