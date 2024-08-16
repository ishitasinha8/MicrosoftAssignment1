const checkEven = (num: number, callback: (result: boolean) => void): void => {
  setTimeout(() => {
    if (num % 2 === 0) {
      callback(true);
    } else {
      callback(false);
    }
  }, 3000);
}

checkEven(12, (result: boolean) => {
  console.log(result);
});