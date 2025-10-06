/* 05.10.2025 */

// 1. Поиск ключа по значению
// Найди ключ по значению (первое вхождение)
// findKey({name: "John", age: 30}, "John") // → "name"
function findKey(obj, value) {
    for (let [key, val] of Object.entries(obj)) {
        if (val === value) {
            return key;
        }
    }
    return undefined;
}
console.log(findKey({ name: "John", age: 30 }, "Anna"));
console.log(findKey({ name: "John", age: 30 }, "John"));

// 2. Поменяй ключи и значения местами
// invertObject({a: "x", b: "y"}) // → {x: "a", y: "b"}



// 3. Верни объект только с числовыми значениями
// filterNumbers({a: 1, b: "hello", c: 3}) // → {a: 1, c: 3}


// 4. Добавь префикс ко всем ключам
// addPrefix({name: "John", age: 30}, "user_") // → {user_name: "John", user_age: 30}

function addPrefix(obj, str){
    for (const key of Object.keys(obj)){
        obj[str + key] = obj[key];
        delete obj[key];
    }
    return obj;
}
console.log(addPrefix({name: "John", age: 30}, "user_"))

// 5. Раздели массив на четные и нечетные числа
// splitEvenOdd([1, 2, 3, 4, 5]) // → {even: [2, 4], odd: [1, 3, 5]}

function splitEvenOdd(arr){
    let obj ={
        even: [],
        odd: []
    }
    arr.forEach(el => el % 2 == 0? obj.even.push(el) : obj.odd.push(el))
    return obj;
}
console.log(splitEvenOdd([1, 2, 3, 4, 5]));

// 6. Посчитай количество каждого элемента
// countElements(["a", "b", "a", "c", "b"]) // → {a: 2, b: 2, c: 1}


// 7. Удали все falsy значения из массива
// removeFalsy([0, 1, false, 2, "", 3]) // → [1, 2, 3]


// 8. Сгруппируй строки по их длине
// groupByLength(["a", "bb", "ccc", "dd", "eee"]) // → {1: ["a"], 2: ["bb", "dd"], 3: ["ccc", "eee"]}
let arrayOfElements = ["a", "bb", "ccc", "dd", "eee"];

function groupByLength(array) {
    let objGroupByLength = {};
    for (let element of array) {
        if (objGroupByLength[element.length] === undefined) {
            objGroupByLength[element.length] = [];
        }
        objGroupByLength[element.length].push(element);
    }
    return objGroupByLength;
}

console.log(groupByLength(arrayOfElements));