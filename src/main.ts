import "./style.css";

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(4, 1));

// npm run build  компіляція в js бо браузер розумію тільки js

// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: "evgeniy",
//   age: 25,
// };

// let userJack: User = {
//   name: "Jack",
//   age: 24,
// };

// console.log(user);
// console.log(userJack);

// Array stings

// let arrString: string[];

// arrString = ["Text"];

// console.log(arrString);

//Array numbers

// let arrNumber: number[];
// arrNumber = [222];

// console.log(arrNumber);

//Array more

// let matrix: number[][];

// matrix = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];

// console.log(matrix);

// Array mix
// let mixed: (number | string)[] = [1, "two"];

// console.log(mixed);

// Array Object
// type User = {
//   name: string;
//   age: number;
// };

// let users: User[] = [
//   {
//     name: "Tom",
//     age: 30,
//   },
//   {
//     name: "Tom",
//     age: 30,
//   },
//   {
//     name: "Tom",
//     age: 30,
//   },
//   {
//     name: "Tom",
//     age: 30,
//   },
// ];

// console.log(users);

// for all types

// let arrAny: any[] = ["Heorgiy", 11222];
// console.log(arrAny);

// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;
// notSure = {};

// let num: number;

// num = notSure;

// console.log(num);

// function fetchUserData(id: string, callback: (data: any) => void): void {
// Тут може бути якийсь запит, але ми його заповнимо самі
//   const responseData = {
//     old: "Tom",
//     name: 12,
//   };

//   callback(responseData);
// }

// Використання функції:
// fetchUserData("123", (data) => {
//   console.log(data.old, data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
// });

// let notSure: unknown = 4;
// notSure = "maybe a string instead";
// notSure = false;

// let num: number;

// num = notSure;

// console.log(num);

// type unknown

// function fetchUserData() {
//   return "Tom";
// }

// let userdata: unknown = fetchUserData(); //return unknown data
// if (typeof userdata === "string") {
//   console.log(userdata.toUpperCase());
// }

//незламнній масив

// let tupleType: [string, boolean];

// tupleType = ["Hi guys", false];

// console.log(tupleType);

// let date: [number, number, number];
// date = [7, 1, 2023];

// console.log(date);

//... оператор розширення

// let tuple: [string, ...number[]];
// tuple = ["hi", 2662, 233, 2323];

// console.log(tuple);

// тип данних enum
// именна повинны починатися з великои литери

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.USER,
// };

// if (person.role === Role.ADMIN) {
//   console.log("Hi Admin");
// } else {
//   console.log("Hi User");
// }

// enum UserStatus {
//   Active = "Active",
//   Offline = "Offline",
// }

// let status: UserStatus = UserStatus.Active;

// console.log(status);

// enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// function respond(status: HttpCodes) {}

// respond(HttpCodes.OK);

// console.log(respond);

// const enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unsohraized = 401,
// }

// const status = HttpCodes.OK;

// console.log(status);

//Union Type
// let mixedType: string | number | boolean;

// mixedType = "hi";

// console.log(mixedType);

// function combine(param1: number | string, param2: string | number) {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//     return param1 + param2;
//   }
// }

// console.log(combine(1, 2));

// Intersection Type спосіб обєднання двух типів в один

// type Employee = {
//   name: string;
//   id: number;
// };

// type Manager = {
//   employees: Employee[];
// };

// type CEO = Employee & Manager;

// const ceo: CEO = {
//   name: "Alice",
//   id: 1,
//   employees: [
//     {
//       name: "Bob",
//       id: 2,
//     },
//   ],
// };

//Literal Type це тип що набуває конкретного значення

// type OneOrTwo = 1 | 2;

// let value: OneOrTwo;

// value = 1;

// type YesOrNo = "Yes" | "No";

// let question: YesOrNo;

// question = "No";

// Типи для методів і функцій

//Return Type контролюємо тип який буде повертати функція

// function greet(): string {
//   return "Hi guys";
// }

// let result = greet();

// console.log(result);

// const greetYou = (): string => {
//   return "Hi ";
// };

// let yourWelcome = greetYou();
// console.log(yourWelcome);

// type User = {
//   id: number;
//   name: string;
// };

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user) => user.name);
// };

// const users: User[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// let result = getUserNames(users);
// console.log(result); // ['Alice', 'Bob', 'Charlie']

// type void

// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage("Hi guys");

//Function type

// let myFunc: (firstArg: string, secondArg: number) => void;

// myFunc = (first: string, second: number) => {
//   console.log(`First: ${first}, Second: ${second}`);
// };

// myFunc("ddd", 333);

// type Callback = (num1: number, num2: number) => number;

// function calc(param1: number, param2: number, callback: Callback): void {
//   console.log("Result:", callback(param1, param2));
// }

// calc(1, 2, (num1, num2) => num1 + num2);

//Custom Types
// щоб зробити власні типи використовуємо type
// type User = {
//   id: number;
//   name: string;
// };

// const user: User = {
//   id: 1,
//   name: "Manuna",
// };

// console.log(user);

// enum AnimalIds {
//   cat = "cat",
//   dog = "dog",
//   fish = "fish",
// }

// type Animal = {
//   [AnimalIds.cat]: {
//     meow: string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string;
//   };
//   [AnimalIds.fish]: () => undefined;
// };

// let cat: Animal[AnimalIds.cat] = {
//   meow: "Hi",
// };

// console.log(cat);

// опціональний тип ?

// function greet(name?: string) {
//   if (name) {
//     return `Hello ${name}`;
//   } else {
//     return "hello guest!";
//   }
// }

// console.log(greet("Manuna"));
// console.log(greet());

// type interface

// interface Animal {
//   name: string;
// }

//type Type

// type typeAnimal = {
//   name: string;
// };

//interface

// interface Animal {
//   name: string;
// }

// interface Animal {
//   age: number;
// }
// let dog: Animal = {
//   name: "Doggi",
//   age: 626,
// };

// console.log(dog);

// обєднання двух типів в один &

// type AnimalNAme = {
//   name: string;
// };

// type AnimalAge = {
//   age: string;
// };

// let cat: Animal = {
//   name: "Fido",
//   age: 5,
// };

// console.log(cat);

//interface

// interface Person {
//   name: string;
//   age: number;
//   number?: number;
// }

// function greet(person: Person) {
//   console.log(`Hi ${person.name}, you are ${person.age} old`);
// }

// const user: Person = {
//   name: "Manuna",
//   age: 18,
//   number: 11 - 11 - 223,
// };

// greet(user);

// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: "Anthony",
//   age: 21,
//   greet(phrase) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user.greet("Вітання всім, я"); // Вітання всім, я Anthony

// узагальнені типи

// let arr: Array<string | number | boolean> = [];

// arr = ["hi guys", 21, true];

// console.log(arr);

// const promise: Promise<string> = new Promise((resolve) => {
//   setInterval(() => {
//     resolve("Done");
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data);
// });

//function/method

// function firstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// let numbers = [1, 2, 3, 4, 5];
// let firstNum = firstElement(numbers);

// let strings = ["a", "b", "c", "d"];
// let firstStr = firstElement(strings);

// console.log(firstNum);

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const merdge = merge({ age: 12 }, { Name: "Anastasia" }) as {
//   age: number;
//   Name: string;
// };

// console.log(merdge.Name);

//easy way
// function merge<T, U>(objA: T, objB: U): T & U {
//   return Object.assign({}, objA, objB); // Create a new object to avoid mutating the input objects
// }

// const merged = merge({ name: "Alisa" }, { age: 28 });

// console.log(merged.name); // This will work, and `merged

// type Length = {
//   length: number;
// };

// function getLength<T extends Length>(str: T) {
//   return str.length;
// }

// console.log(getLength("rewrw"));

// function arrayLogger<T extends Array<string>>(array: T): void {
//   array.forEach((item) => console.log(item));
// }

// arrayLogger(["sssss", "wewewe"]);

// keyof оператор

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// type PersonKeys = keyof Person; // 'name' | 'age' | 'location'

// function getPersonInfo(person: Person, key: PersonKeys) {
//   return person[key];
// }

// const john: Person = {
//   name: "Anastasia",
//   age: 18,
//   location: "Spain",
// };

// T extends object, U extends keyof T

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
textStorage.addItem("Ketti");
textStorage.addItem("Nasti");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(12);
console.log(numberStorage.getItems());
