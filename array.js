"use strict";

// Array
// 배열을 표현하는 3가지 방법

let fruits = ["apple", "banana", "mango", "grape"];
// 1. for문
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 2. for of
for (let fruit of fruits) {
    console.log(fruit);
}
// 배열의 요소(변수지정)를 나타내기 >>> for (요소 of 배열)
// 요소(변수) 출력하기

// 3. forEach
fruits.forEach((fruit) => console.log(fruit));
// 배열에 forEach메서드를 사용하여 arrow function을 통해 요소를 출력한다

// 배열과 관련된 메서드
// splice()   >>>  배열의 특정 요소를 삭제 또는 교체 또는 추가할 수 있다
// concat()   >>>  배열과 배열을 합쳐서 새로운 배열을 출력할 수 있다
// indexOf()  >>>  배열의 몇 번째에 요소가 위치하는지 찾을 수 있다 -> 배열 안에 요소가 없다면 -1 출력
// includes() >>>  해당 요소가 배열에 존재하는지 확인할 수 있다 -> true/false로 return
// lastIndexOf()  >>> 한 배열 안에 같은 요소가 2개(이상) 존재한다면, indexOf를 사용하면 첫 번째 요소의 index를 출력하고
//                >>> lastIndexOf를 사용하면 동일한 요소의 마지막 index를 출력한다.

// Array와 관련된 메서드(함수)

// 1. 배열(Array)을 하나의 문자열(String)로 변환하여 출력하기  >>> join(구분자 넣어주기)
const fruits = ["apple", "banana", "orange"];
const result = fruits.join(); // 출력결과: 'apple, banana, orange'
const result = fruits.join(",and"); // 출력결과: 'apple,and banana,and orange'

// 2. 하나의 문자열(String)을 배열(Array)로 변환하여 출력하기  >>> split(구분자 넣어주기)
const fruits = "apple, banana, orange";
const result = fruits.split(","); // 출력결과: ['apple', 'banana', 'orange']
//기존 fruits의 문자열에 콤마(,)로 구분되어 있기 때문에, split(',')을 해주면 콤마를 기준으로 배열을 생성한다

// 3. 기존 배열의 특정 요소를 지우고, "새로운 배열을 생성하기"
// splice()를 사용하면, 지워진 요소가 담긴 배열과, 남겨진 요소가 담긴 배열 2가지를 출력한다
// 따라서 새로운 배열을 생성하려면 slice()를 사용해야 한다
const array = [1, 2, 3, 4, 5];
const result = array.slice(2, 5); // 출력결과: [3,4,5]
// splice(시작값, 끝값)  >>> 단, 끝값은 해당 index를 배제한다. 따라서 4번째 요소까지 남기려면 index는 5를 해줘야 한다

// class 컴포넌트 생성 후, 아래 생성자들을 배열로 만들어준다.
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [new Student("A", 29, true, 45), new Student("B", 28, false, 80), new Student("C", 30, true, 90), new Student("D", 40, false, 66), new Student("E", 18, true, 88)];

// 점수(score)가 90점인 학생 찾기 >>> find() 메서드 사용
// find() => 인자로 콜백함수를 받는다. (콜백함수는 boolean값을 받는다)
const result = Student.find((score) => "Student.score === 90");
