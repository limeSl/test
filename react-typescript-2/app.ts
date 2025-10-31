// 구조 분해
const user = {
    name: 'Bob',
    address: {
        street: '123 Main St',
        city: 'New York',
        zipcode: '10001'
    }
};

const { address : { city, zipcode } } = user;
console.log(city, zipcode);

// 숫자 배열
let list: number[] = [1,2,3,4,5,6,7,8,9,10];
const list2 = list.map(num => num * 2);
console.log(list2);

//문자열 배열 다루기
const fruits = ['apple', 'banana', 'orange', 'grape'];
const fruits2 = fruits.map(str => str[0]);
console.log(fruits2);

//객체 배열 다루기
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Andy', age: 32 },
    { name: 'Charlie', age: 28 }
];
const users2 = users.filter(i => i.age >= 30).map(i => i.name);
console.log(users2);

//다양한 메서드 조합하기
const list3 = list.filter(i => i%2 === 0).map(i => i * i).reduce((sum, n) => sum + n, 0);
console.log(list3);

//다양한 결과값 도출하기
const products = [
    { name: 'Apple', price: 1000, count: 25 },
    { name: 'Banana', price: 500, count: 10 },
    { name: 'Orange', price: 800, count: 5 }
];

console.log(products.reduce((sum, n) => sum + n.price , 0));
console.log(products.filter(i => i.price>=800).map(i => i.name));
if(products.some(i => i.count < 10)) console.log("재고 부족 상품 있음");

