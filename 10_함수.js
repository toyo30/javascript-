//함수 여러가지 동작 동시에 하는 것 

//console alert 이런 것들도 다 함수다. 


//함수     함수명    매개변수
// function sayHello(name){
//     console.log('Hello, ${name}');
// }


//매개변수는 2개 이상 없을 수도 있다. 여러개면 쉼표로 이야기할 수 있다. 중갈로 내부는 함수의 실행함수를 가져온다. 


//함수는 함수명 뒤에 갈로를 넣어서 호출 할 수 있다. 


//함수 작성 
//매개 변수가 없는 함수를 말한다. 
function showError(){
    alert('에러가 발생했습니다.')
}

showError();

//결제등을 실패할 때마다 이렇게 입력해주면 편하다. 유지보수가 편하다. 
//100군대에서 사용하고 있지만, 새로고침을 입력해주세요라고 하면 

//매개 변수가 있는 함수
function sayHi(name){
    const msg = `Hello, ${name}`;
    console.log(msg);
}

sayHi('Mike');
sayHi('tam');


//벡틱을 사용하여 표현 + 매개변수가 있는 함수
// 함수 값에 따라서 달라지는 경우. 

function sayHello(name){
    let message = 'hello';
    if(name){
        message += `, ${name}`;
    }
    console.log(message);
}

sayHello();
sayHello('mike');



//message는 지역변수다. 함수 안에서만 사용할 수 있는 변수다. 

//message를 함수 밖엥서도 사용하고 싶다면. 


let tiktok  = 'hi';

function tickhi(name){
    if(name){
        tiktok += `, ${name}`;
    }
    console.log(tiktok);


}


tickhi('minky');
console.log(tiktok);

//함수 밖에 있는 변수가 함수를 거치면서 바뀌게 됨. 


console.log('------- 전역 변수와 지역변수--------' );


let msg= "welcome";
console.log(msg)


function sayho(name){
    let msg = "hello"
    console.log(msg + ' ' + name);
}

sayho('mike');

//전역 변수가 함수 안에서 지역변수로 활동하고, 

console.log(msg)

//다시 그 변수를 호출하면 변화하지 않고 등장한다. 



let nick = "Mike";

function adult(nick){
    console.log(nick)

}


adult();
adult('jame');

//전역변수를 매개변수로 하면 함수의 지역변수가 된다. 겹치지 않게 해야 한다. 
//전역 변수가 많아지면 관리가 힘들어진다. 


//or

function sayhellow(name){
    let newName = name ||'friend';
    let ha = `go, ${newName}`
    console.log(ha)
}

sayhellow();//매개 변수가 없으면 언디파인드가 들어가기 때문에 false가 나오게 되고, or은 마지막을 반환하기 때문에 freind를 반환한다.
sayhellow('jane');

//default value

function sayhoho(name='frend'){
    let msg = `hello, ${name}`
    console.log(msg)
}

sayhoho();//변수에 기본값을 입력해 넣어서 네임이 없을 때, 할당됨
sayhoho('jane');


//return 으로 값 변환

function add(num1, num2){
    return num1 + num2;
}

//압에 리턴을 주면 리턴 오른쪽에 있는 값을 반환함. 

const result = add(2,3); //두 개를 입력해주면 더한다음에 반환해줌. 반환에서 result에 저장해줌
console.log(result)


//return이 없어도 반환해줌. 

function showError(){
    alert('에러가 발생했습니다.');
    return;
    //언디파인드를 반환함. 
}

const result1 = showError();
console.log(result1);

//종료됨 