window.onload=Palindrome;

function Palindrome() {
    let word=prompt('Введите любое слово или предложение для проверки');
    alert(check(word.toLowerCase()));
}

function check(word) {
    return word===word.split('').reverse().join('');
}
