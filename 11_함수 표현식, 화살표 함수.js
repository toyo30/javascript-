//함수 선언문이 이전과 같은 방법이었다면, 


//함수 선언문 

function sayHello(){
    console.log('hello');
}


//다른 방식도 존재한다. 
//이름이 없는 함수를 만들고 변수로 함수를 할당해 주는 것을 함수 표현식이다. 
//실행하는 방식과 표현하는 방식이 같다. 

let sayHello1 = function(){
    console.log('Hello');
}
   
//어떤 차이가 있을까? /호출할 수 있는 타이밍이다. 

//함수 선언문의 경우 어디서든 호출이 가능하다. 

//자바스크립트 인터프리터 언어라고 한다. 
//순차적으로 읽고 반환 심지어 함수표현식의 위에서도 선언  가능. 
//그런데 어떻게 먼저 실행가능할까? 
//함수는 호출하는 부분이 위에 있어도 찍히는데, 

//코드의 모든 함수 선언문을 파악해서, 먼저 인식하고, = 호이스팅. 
//코드 위치가 실제로 올라가지 않는다. 

sayHello();

//함수 표현식의 경우 
//자바스크립트가 함수에 도달하면 생성한다. 


//그래서 뭐가 더 좋냐? 신경쓰기 싫닫고 하는 부분은 함수 선언문을 사용해라. 


//화살표 함수 


let add = function(num1, num2){
    return num1 + num2;
}

let add1 = (num1, num2) =>{
    return num1 + num2;
}

//return문의 경우 이렇게 바꿀 수 있다. 

const ioo = (num1, num2) => (
    num1+ num2;
);


//return 문이 하나라면 괄호 생략 가능하다. 
let add1 = (num1, num2) => num1 + num2;


//인수가 하나라면 갈호도 생략가능. 

let sayHello2 = name => `Hello, &{name}`;



//인수가 없는 함수의 경우 괄호를 생략할 수 없다. 

let showError = ()=>{
    alert('error');
}

//return문이 한가지더라도, return문 앞에 여러 줄의 코드가 있다면 일반 괄호를 사용할 수 없다. 

let add3 = function(num1, num2){
    const result = num1 +num2;
    return result;
}

let add4 = (num1, num2)=>{
    const result = num1 +num2;
    return result;
}

