console.log('Hello Codit!'); console.log(20 -5);



// 주석


//console.log('코멘트 주석'); comment


/*여러 줄 주석 넣기 
여러 줄 말이야  css랑 똑같네 */




// 자료형 (Data Type)


//숫자 - 정수(NUmber),

//정수 (integer)  소수(floating point) = 사칙연산 가능 

//문자열 (string) '' "" 통일해야 함. + 를 통해서 문자열 연결 가능 
const a = "Hello";
const b = "hi";
console.log(a + b);

// 불린(Boolean) True & False 




// 추상화 - 

// Abstraction 

// 예시 = 지도.  변수 함수 객체가 추상의 개념이다. 






// 변수 

//변수 선언

let espressoPrice;
espressoPrice = 3000; // 할당 연산자, 오른쪽 값을 왼쪽에 저장한다. 
let espressoPrice1 = 3000;
console.log(espressoPrice1);

// 변수에 값만 바꿔주면 끝.


//함수

// 변수가 값을 정해준다면 함수는 명령들을 정해준다. 

function greetings() {
    console.log('hi');
    console.log('안녕')
};

// 함수 호출
greetings();

//파라 미터 parameter(매개 변수)

//console.log(값 = 파라미터)

// function 함수이름(파라미터) {};

function parameter(sentence) {
    console.log('hi');
    console.log('안녕')
    console.log(sentence)
    console.log('안녕하세요 ' + sentence + '님')
};

parameter('오오');



// 파라미터 여러개 

function para(name, weight, tall){
    console.log(name + weight/(tall*tall/100000))
};



// 자바스크립트 함수 리턴

