"use strict";

// 1.class(template) & object(instance if a class) 

class Person {                 // 생성자 함수 만들기(class 생성)
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
// methods
    speak() {
        console.log(`${this.name}: hello!`)
    }
}

const kirin = new Person('kirin', 20);
console.log(kirin.name);
console.log(kirin.age);
kirin.speak();

// 2. 상속과 다양성
class Shape {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    // 메소드1
    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    // 메소드2
    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}    // extends 를 사용하여 Shape class를 가져온다
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw()   // 출력결과 : 'drawing blue color!
rectangle.getArea();   // 출력결과 : 400

class Triangle extends Shape {}    // extends 를 사용하여 Shape class를 가져온다
const triangle = new Triangle(20, 20, 'red');
triangle.draw();   // 출력결과 : 'drawing red color!
triangle.getArea();   // 출력결과 : 400

// 만약 triangle의 getArea 결과값을 다르게 출력하고 싶다면?
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;   // 새로운 수식을 함수 안에 직접 넣어준다
    }
}    

// 3. object
// object 생성 방법 2가지
const obj1 = {}  // 'objent literal' syntax, 중괄호 안에 오브젝트 {키:값}을 정의해준다
const obj2 = new Object  // 'object constructor' syntax, 뉴생성자를 통해 오브젝트 객체를 생성해준다(constructor templete 따로 생성하기)

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const kirin = {
    name: 'kirin',
    age : 4
};
print(kirin);

// 이미 생성된 객체에 추가적으로 키를 생성하고 싶다면
kirin.hasJob = 'coder';
console.log(kirin.hasJob);