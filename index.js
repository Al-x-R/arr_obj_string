"use strict";

const arrRandom = []

function getRandomArr() {
    for (let i = 0; i < 10; i++) {
        arrRandom.push(Math.round(Math.random() * 100))
    }
    return arrRandom
}

console.log(getRandomArr())

// Функция принимает массив и выводит его на экран.

function displayArr(arr) {
    arr.forEach((item) => {
        console.log(item)
    })
}

console.log(displayArr(arrRandom))

// Функция принимает массив и выводит только четные элементы.

function evenNumsOfArr(arr) {
    arr.forEach((item) => {
        if (item % 2 === 0) {
            console.log(item)
        }
    })
}

console.log(evenNumsOfArr(arrRandom))

// Функция принимает массив и возвращает сумму всех элементов массива.

let sum = 0

function sumOfArrItems(arr) {
    arr.forEach((item) => {
        sum += item
        return sum
    })
}

sumOfArrItems(arrRandom)
console.log(sum)

// Функция принимает массив и возвращает его максимальный элемент.

function maxArrValue(arr) {
    return Math.max.apply(null, arr)
}

console.log(maxArrValue(arrRandom))

// Функция добавления нового элемента в массив по указанному индексу.

arrRandom.splice(2, 0, 'hi')
console.log(arrRandom)

// Функция удаления элемента из массива по указанному индексу.

arrRandom.splice(2, 1)
console.log(arrRandom)

/*
Функция принимает 2 массива и возвращает новый массив,
    в котором собраны все элементы из двух массивов без повторений.*/

const arr1 = [1, 2, 3, 4, 5, 'hi', 'hello']
const arr2 = [1, 3, 5, 'hi', 'home']


function newArr(arr1, arr2) {
    let resArr = []
    let arr3 = arr1.concat(arr2)
    arr3.sort()
    console.log(arr3)
    for (let i = 0; i < arr3.length; ++i) {
        if (arr3[i] !== arr3[i - 1]) {
            resArr.push(arr3[i])
        }
    }
    console.log(resArr)
}

console.log(newArr(arr1, arr2))

/*
Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы
(то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.
*/

function newArr1(arr1, arr2) {
    let resArr1 = []
    let arr3 = arr1.concat(arr2)
    arr3.sort()
    console.log(arr3)
    for (let i = 0; i < arr3.length; ++i) {
        if (arr3[i] === arr3[i - 1]) {
            resArr1.push(arr3[i])
        }
    }
    console.log(resArr1)
}

console.log(newArr1(arr1, arr2))