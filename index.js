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

Array.prototype.addElem = function (index, item) {
    this.splice(index, 0, item)
}

const testArr1 = [1, 2, 3, 4, 5]
let newArray = testArr1.addElem(3, 'hello from test')
console.log(newArray)

// Функция удаления элемента из массива по указанному индексу.

Array.prototype.delElem = function (index) {
    this.splice(index, 1)
}

const testArr2 = [1, 2, 3, 4, 5]
testArr2.delElem(3)
console.log(testArr2)

// new random array

const arrRandom2 = []

function getRandomArr2() {
    for (let i = 0; i < 5; i++) {
        arrRandom2.push(Math.round(Math.random() * 100))
    }
    return arrRandom2
}

console.log(getRandomArr2())

/*
Функция принимает 2 массива и возвращает новый массив,
    в котором собраны все элементы из двух массивов без повторений.*/

function newArr(arr1, arr2) {
    let resArr = []
    let arr3 = arr1.concat(arr2)
    arr3.sort()
    for (let i = 0; i < arr3.length; ++i) {
        if (arr3[i] !== arr3[i - 1]) {
            resArr.push(arr3[i])
        }
    }
    console.log(resArr)
}

console.log(newArr(arrRandom, arrRandom2))

/*Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива,
    которых нет во втором массиве.*/

function newArray5(arr1, arr2) {
    let resArr5 = []

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            resArr5.push(arr1[i])
        }
    }
    return resArr5
}

console.log(newArray5(arrRandom, arrRandom2))

/*
Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы
(то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.*/

function newArray2(arr1, arr2) {
    let resArr2 = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !resArr2.includes(arr1[i])) {
            resArr2.push(arr1[i])
        }
    }
    return resArr2
}

console.log(newArray2(arrRandom, arrRandom2))