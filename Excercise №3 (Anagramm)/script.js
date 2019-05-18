// Вспомогательная функция, которая создаёт объект для хранения данных
const buildCharObj = str =>{
    const charObj = {};
    for (let char of str.replace(/[^\w]/g).toLowerCase()){
        // Если объект уже содержит пару ключ-значение равную значению в цикле,
        // увеличиваем значение на 1, в противном случае добавляем букву в качестве ключа
        // и 1 в качестве значения
        charObj[char]=charObj[char]+ 1 || 1
    }
    // console.log(charObj);
    return charObj;
};

const anagram = (strA, strB)=>{
    const aStrObj = buildCharObj(strA),
          bStrObj = buildCharObj(strB);

    // Сравниваем количество ключей в обоих объектах
    // (анаграммы должны иметь одинаковое количество букв)
    if (Object.keys(aStrObj).length!==Object.keys(bStrObj).length) return false;

    // Если оба объекта имеют одинаковое количество ключей, мы можем быть уверены,
    // что обе строки имеют одинаковое количество символов. Теперь мы можем сравнить
    // оба объекта, чтобы увидеть, имеют ли они одинаковые буквы в одинаковом количестве
    for (let char in aStrObj){
        if (aStrObj[char]!==bStrObj[char]) return false;
        return true;
    }
};

console.log(anagram('finder', 'Friend'));
console.log(anagram('hello', 'bye'));