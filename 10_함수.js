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
function sayHello(name){
    const msg = 'Hello, ${name}';
    console.log(msg);
}

sayHello('Mike');
sayHello('tam');



function sayHello(name){
    console.log(name)
    let msg = 'hello' ;
    if(name){
        msg += name;
    }
    console.log(msg);
}

sayHello();
sayHello('mike');