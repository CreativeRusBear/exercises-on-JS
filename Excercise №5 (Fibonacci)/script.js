const Fibonacci = num=>{
  const arrOfNums=[0,1];
  for (let i=2; i<=num;i++){
      const firstNum = arrOfNums[arrOfNums.length-1],
            secondNum = arrOfNums[arrOfNums.length-2];
      arrOfNums.push(firstNum+secondNum);
  }
  return arrOfNums[num];
};

console.log(Fibonacci(10));

//2-ой способ (рекурсивный)
// const fibonacci = num => {
//     if(num < 2) return num;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// };