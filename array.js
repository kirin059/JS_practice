'use strict';

// Array
// 배열을 표현하는 3가지 방법

let fruits = ['apple', 'banana', 'mango', 'grape']
// 1. for문
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 2. for of
for (let fruit of fruits) {
    console.log(fruit);
}
// 배열의 요소(변수지정)를 나타내기 >>> for (요소 of 배열)
// 요소(변수) 출력하기

// 3. forEach
fruits.forEach( (fruit) => console.log(fruit));
// 배열에 forEach메서드를 사용하여 arrow function을 통해 요소를 출력한다 


// 배열과 관련된 메서드
// splice()   >>>  배열의 특정 요소를 삭제 또는 교체 또는 추가할 수 있다
// concat()   >>>  배열과 배열을 합쳐서 새로운 배열을 출력할 수 있다
// indexOf()  >>>  배열의 몇 번째에 요소가 위치하는지 찾을 수 있다 -> 배열 안에 요소가 없다면 -1 출력
// includes() >>>  해당 요소가 배열에 존재하는지 확인할 수 있다 -> true/false로 return
// lastIndexOf()  >>> 한 배열 안에 같은 요소가 2개(이상) 존재한다면, indexOf를 사용하면 첫 번째 요소의 index를 출력하고
//                >>> lastIndexOf를 사용하면 동일한 요소의 마지막 index를 출력한다.



