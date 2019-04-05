window.onload=function () {
  let num =parseInt(prompt('Введите число n', 5));
    (function (n) {
        for (let i=1; i<=n; i++){
            if (i/3%5==0) console.log('fizzbuzz');
            else if (i%3==0)console.log('fizz');
            else if (i%5==0) console.log('buzz');
            else console.log(i);
        }
    })(num);
};
