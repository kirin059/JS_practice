"use strict";
//순수 바닐라 자바스크립트를 사용할 때는 가장 상단에 use script를 선언해주는 것이 좋다.

// 2. Variable >>> let & const (added in ES6) / var
let name = 'kirin'   // name >> 'kirin'
name = 15  // name >> 15

// 3. constant (read only)
const name = "kirin"   // name >> 'kirin'
const name = 'rory'   // name >> Identifier 'age' has already been declared

// blockscope >>중괄호로 묶여진 공간 안을 blockscpoe이라 하여 밖에서 안의 변수명을 선언해도 값이 나오지 않는다
// global scope >> 중괄호 밖에 쓰여진 변수는 안과 밖에서 모두 호출할 수 있다

var 
// hoistiong : 어디에 선언했냐에 상관 없이 항상 선언을 제일 위로 끌어 올려준다 (var는 blockscope이없다. var hoisting이 이루어진다.)

// 4. Variable types (read/write)
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${size}`)


// 5. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);   // string 12
console.log(`string literals: 1 + 2 = ${1+2}`);

//4. Numeric opertaorts
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);  //reminder( 5나누기 2의 나머지 )
console.log(2 ** 3); // 2의 3제곱승

// 5. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;  //++가 앞에 붙으면 preincrement
// counter = counter + 1;    >> 2+ 1 = 3
// preIncrement = counter;   >> 3
const preIncrement = counter++;  //++가 뒤에 붙으면 postincrement
// preIncrement = counter;   >> 2 
// counter = counter + 1;    >> 2 + 1

//6. assignment opertators
let x = 3;
let y = 6;
x += y;  // x = x + y;
x -= y;  // x = x - y;  

//7. equality
const stringFive = '5';
const numerFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive); // true
// === strict equality, no type conversion
console.log(stringFive === numberFive);  // false
console.log(stringFive !== numberFive); // tue

// object equality by reference
const kirin1 = {name: 'kirin'};
const kirin2 = {name: 'kirin'};
const kirin3 = kirin1;
console.log(kirin1 == kirin2);  // false (reference가 다르기 때문)
console.log(kirin1 === kirin2); // false
console.log(kirin1 === kirin3); // true (kirin1의 레퍼런스 값을 3에 넣었기 때문)

// equality
console.log(0 == false);  //true
console.log(0 === false); //false (type이 다름)
console.log('' == false); //true
console.log('' == false); //false (type이 다름)
console.log(null == undefined); //true
console.log(null == undefined); //false 

// 8. if문
// if, else if, else
const nickname = 'kirin';
if (nickname === 'kirin') {
    console.log('welcome');
} else if (name === 'coder') {
    console.log('wow');
} else {
    console.log('unknown');
}

// 9. ternary operator 삼항연산자
// condition ? true : false ;
console.log(nickname === 'kirin' ? 'yes' : 'no');

//10. switch 문
const browser = 'IE';
switch (browser) {
    case 'IE' :             // 값을 case에 넣어줘서 맞으면 break
        console.log('no');
        break;
    case 'Chrome' :
    case 'Firefox' :       // 같은 메시지를 출력할 때는 case를 연달아 써주기
        console.log('love');
        break;
    default:
        console.log('what');
}

// break, continue 사용하여 even number 출력하기
for(i=0; i<11; i++) {
    if (i%2===0) {
       continue; 
    }
    console.log(`answer: ${i}`);
};

