import User from './User';
import Homework from './Homework';
import UserInterface from './interfaces/User.interface';
import HomeworkInterface from './interfaces/Homework.interface';


// Создать несколько пользователей и добавить им домашние задания в различном состоянии
const homework1: HomeworkInterface = new Homework('typescript', 'learn typescript', 'done');
const homework2: HomeworkInterface = new Homework('React', 'learn React for one night', 'not done');
const user1: UserInterface = new User('Andrei', 'Saiko', [homework1, homework2]);
const user2: UserInterface = new User('Slim', 'Shady', [homework2, homework1]);

// Написать функцию, которая принимает на вход список студентов и для каждого студента выводит в консоль его имя,
// а затем название домашнего задания и его статус.
// (Обязательно указать тип данных для аргументов функции и для выводимого значения)
function showStudentsInfo(students: UserInterface[]): void {
    students.forEach((item: UserInterface) => {
        item.homeWorks.forEach((work: HomeworkInterface) => {
            console.log(item.firstName + ' - ' + work.topic, work.status);
        });
    });
}
showStudentsInfo([user1, user2]);

// 5. Написать функцию, которая принимает список пользователей и выводит количество пользователей,
// которые завершили все свои домашние задания.
// (Обязательно указать тип данных для аргументов функции и для выводимого значения)
function showStudentsWithComplitedTasks(students: UserInterface[]): number {
    let countOfDoneTasks: number = 0;
    students.forEach((item: UserInterface) => {
        item.homeWorks.forEach((work: HomeworkInterface) => {
            if (work.status === 'done') countOfDoneTasks++;
        });
    });
    console.log('Count of student who completed tasks is ' + countOfDoneTasks);
    return countOfDoneTasks;
}
showStudentsWithComplitedTasks([user1, user2]);
