const checked = str=>{
    const arr_str = str.toLowerCase().split('');
    const vowels=['a', 'e', 'i', 'o', 'u'];
    let numsOfVowels=0;
    arr_str.forEach((value => {
        for (let vowel of vowels){
            if (value==vowel) numsOfVowels++;
        }
    }));
    return numsOfVowels;
};

console.log(checked('Hello'));
console.log(checked('why'));



// 2-ой способ
// const findVowels = str => {
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for(let char of str.toLowerCase()) {
//         if(vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
// }

// 3-ий способ
// const findVowels = str => {
//     const matches = str.match(/[aeiou]/gi)
//     return matches ? matches.length : 0
// }