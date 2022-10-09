const sumAll = function(min, max) {
    if (min < 0 || max < 0 ){
        return 'ERROR';
    }

    else if (!Number.isInteger(min) || !Number.isInteger(max)){
        return 'ERROR';
    }

    else if (min > max){
        let temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;

    for (let i = min; i < max + 1; i++) {
    sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
