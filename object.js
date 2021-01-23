"use strict";

// primative type(원시형)은 변수 하나 당, 하나의 값만 담을 수 있다.
const name = 'kirin'; // string 값
const age = 20;  // number 값
const job = 'coder' // string 값

// 원시형처럼 변수 하나 당 하나의 값만 담을 수 있다면, 함수에 담았을 때 각각 인자로 받아야 하기 때문에 비효율적이다.
function Person (name, age, job) {
    console.log(name);
    console.log(age);
    onsole.log(job);
    // 만약 변수도 많고 변수만큼 함수에 담아야 하는 매개변수도 많아진다면? >> 각각 다 생성해주어야 한다
}



// solution (1)  >>> object literal
// object 하나를 만든 뒤, 그 안에 "키/값"을 넣어주면 효율적으로 관리할 수 있다.
const kirin = { name: 'kirin', age: 4, job:'coder'};

Person(kirin);  // 출력결과: { name: 'kirin', age: 4, job: 'coder' }

// solution (2)  >>> object constructor
// new 생성자를 만들어서 관리해 줄 수 있다.
const kirin = new Person();



// 자바스크립트는 Runtime(프로그램이 동작하고 있을 떄) 일때 결정되는 언어.
// 따라서 이미 객체(object)를 생성한 후에 키:값을 추가해 줄 수 있다.

