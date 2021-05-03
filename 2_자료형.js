const name1 = "MIke"; //문자형 


// 문자형은 큰따옴표 작은 따옴표 ₩(백틱으로 사용가능하다. )
// ``
// 큰 따옴표 작은 따옴표 차이는 없다. ``


// const name1 = 'MIKE';
// const name2 = "MIKE";
// const name2 = `MIKE`;

// const message = "I'm a boy";
// const message2 = 'I \'m a boy';    //엔터 위에 있는 걸 하면 특수 문자로 입력해서 작은 따옴표안에 작은 따옴표를 사용할 수 있다. 

// const message3 = 'My name is ${name}';   //중갈로 안에 변수 넣기. 큰 따옴표사용시 변수명이 그대로 노출됨. 

const message4 = 'what is this $(30+1)';

console.log(name1)



숫자형 

const age= 30; // 숫자형 number
const PI = 3.14;

console.log(1+2); // 더하기
console.log(10 -3); //빼기
console.log(3*2); // *곱하기 
console.log(6/4);// /나누기 
console.log(6%4);// %나머지 


숫자와 관련된 작업을 할 때, 
// 문자형 더하기 가능 
// 문자형 + 숫자형은 문자형이 됨. 

//Boolean 참 거짓 논리 


const a = 'true'; 
const b = 'false';

const name = "MIKE";
const age = 30;

console.log(name == 'MIKE')
console.log(age > 40)


//null 과 undefined. 없는 값과 할당하지 않은 값. 

let age; 
console.log(age) ---> 변수를 선언만 하고 아무것도 할당하지 않았을 때, 

let user = null; 유저는 존재하지 않는다는 의미. 

//typeof 연산자  변수에 자료형을 알아 낼 수 있음. 

const name = 'mike';

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null);
console.log(typeof undefined);

다른 개발자가 작성한 코드의 자료를 알아내야 하거나, 할 때 사용 
다른 곳에서 받아온 코드를 알아낼 때, 필요. 



