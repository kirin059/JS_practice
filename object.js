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



// <객체의 키값 불러오기>
// 방법 1. 점(.)으로 불러오기
console.log(kirin.name);

// 방법 2. 대괄호([ ])로 불러오기
console.log(kirin['name']);  // 키는 반드시 String형태로 해주어야 한다!! >>> "" 감싸주기


// 자바스크립트는 Runtime(프로그램이 동작하고 있을 떄) 일때 결정되는 언어.
// 따라서 이미 객체(object)를 생성한 후에 키:값을 추가해 줄 수 있다.
const kirin = { name: 'kirin', age: 4, job:'coder'};  // 이미 생성한 object
kirin.hobby = 'yoga'      // 점(.) 방식으로 하나의 프로퍼티 추가
console.log(kirin);       // 출력결과 : { name: 'kirin', age: 4, job: 'coder', hobby: 'yoga' }

kirin['hobby'] = 'yoga';  // 대괄호([ ]) 방식으로 하나의 프로퍼티 추가
console.log(kirin);       // 출력결과 : { name: 'kirin', age: 4, job: 'coder', hobby: 'yoga' }




// <constructor 생성자 만들기>
// 만약 동일한 키를 가진 객체를 반복해서 만들어야 한다면? 일일히 키값을 써주기가 번거롭다.
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 5};
const person3 = {name: 'amily', age: 4};
const person4 = {name: 'rora', age: 2};

// 함수를 하나 생성한 뒤, 함수 안에 name과 age를 키로 가진 객체를 출력해준다
function makePerson(name, age) {
    return {
        name,  // name: name, (키와 값의 이름이 같을 경우, 키를 생략해 줄 수 있다.)
        age,
    };
}

// 함수가 있기 때문에 person5를 만들 때는 함수를 호출한 뒤, 값만 넣어주면 된다
const person5 = makePerson('sally', 2);

// 또다른 방식으로는, "생성자 함수"를 만들어 준다(초기화)  >>> constructor function
function Person(name, age) {
    // this = {}; 가 생략된 것임
    this.name = name;
    this.age = age;
    //return this; 가 생략된것임
}

const person6 = new Person('kate', 9)




// <for..in    vs    for..of>
// 1. for..in   >>>  객체 안의 키를 모두 불러올 때
for (key in kirin) {
    console.log(key);    // 출력결과: name, age, job
}

// 2. for..of  >>>  배열 안의 값을 모두 불러올 때
const array = [1, 2, 6, 7];
for (value of array) {
    console.log(value);  // 출력결과: 1, 2, 6, 7
}
// for문을 돌려서 하나씩 값을 출력하는 것과 같다.