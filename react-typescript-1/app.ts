console.log("Hello World!");

//ex1
let name1: string = "Alice";
let age: number = 20;
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "coding"];

console.log("이름:", name1);
console.log("나이:", age);
console.log("학생:", isStudent);
console.log("취미:", hobbies);

//ex2
let student: { id: number , name: string, hobbies: string[] , isDeveloper: boolean }
= { id: 1, name: "~~~", hobbies: ['A', 'B', 'C'], isDeveloper: true };

console.log(student.name);

//ex3
function calc(num1: number, num2: number, oper: string) : number {
    let result: number = -1;
    switch(oper) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "X":
        case "x":
        case "*": result = num1 * num2; break;
        case "/": if(num2 != 0) result = num1 / num2; break;
        case "%": if(num2 != 0) result = num1 % num2; break;
    }
    return result;
}

console.log(calc(1, 2, "+")); // 3
console.log(calc(5, 1, "-")); // 4
console.log(calc(2, 4, "*"));
console.log(calc(7, 3, "/"));
console.log(calc(8, 3, "%"));
console.log(calc(6, 0, "/"));