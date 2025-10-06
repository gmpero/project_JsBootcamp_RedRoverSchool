/* 05.10.2025 */

// 1. Поиск ключа по значению
// Найди ключ по значению (первое вхождение)
// findKey({name: "John", age: 30}, "John") // → "name"
function findKey(obj, string) {
    for(let [key, value] of Object.entries(obj)) {
        if (value === string) {
            return key;
        }
    } return 'The value is not found'
};
console.log(findKey({name: "John", age: 30}, "Anna"));

// 2. Поменяй ключи и значения местами
// invertObject({a: "x", b: "y"}) // → {x: "a", y: "b"}



// 3. Верни объект только с числовыми значениями
// filterNumbers({a: 1, b: "hello", c: 3}) // → {a: 1, c: 3}


// 4. Добавь префикс ко всем ключам
// addPrefix({name: "John", age: 30}, "user_") // → {user_name: "John", user_age: 30}


// 5. Раздели массив на четные и нечетные числа
// splitEvenOdd([1, 2, 3, 4, 5]) // → {even: [2, 4], odd: [1, 3, 5]}

// 6. Посчитай количество каждого элемента
// countElements(["a", "b", "a", "c", "b"]) // → {a: 2, b: 2, c: 1}


// 7. Удали все falsy значения из массива
// removeFalsy([0, 1, false, 2, "", 3]) // → [1, 2, 3]


// 8. Сгруппируй строки по их длине
// groupByLength(["a", "bb", "ccc", "dd", "eee"]) // → {1: ["a"], 2: ["bb", "dd"], 3: ["ccc", "eee"]}