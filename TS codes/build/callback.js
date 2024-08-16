"use strict";
const checkEven = (num, callback) => {
    setTimeout(() => {
        if (num % 2 === 0) {
            callback(true);
        }
        else {
            callback(false);
        }
    }, 3000);
};
checkEven(12, (result) => {
    console.log(result);
});
