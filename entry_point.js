"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Homework_1 = require("./Homework");
// Создать несколько пользователей и добавить им домашние задания в различном состоянии
var homework1 = new Homework_1.default('typescript', 'learn typescript', 'done');
var homework2 = new Homework_1.default('React', 'learn React for one night', 'not done');
var user1 = new User_1.default('Andrei', 'Saiko', [homework1, homework2]);
var user2 = new User_1.default('Slim', 'Shady', [homework2, homework1]);
// Написать функцию, которая принимает на вход список студентов и для каждого студента выводит в консоль его имя,
// а затем название домашнего задания и его статус.
// (Обязательно указать тип данных для аргументов функции и для выводимого значения)
function showSdudentsInfo(students) {
    students.forEach(function (item) {
        console.log(item.firstName);
        item.homeWorks.forEach(function (work) {
            console.log(work.topic);
            console.log(work.status);
        });
    });
}
showSdudentsInfo([user1, user2]);
