// String() //문자형으로 변환
// Number() //숫자형으로 변환
// Boolean() // 불린형으로 변환 


//문자형 + 문자형은 이어서 보여주고, 자료형이 다르면, 

//string()


// const mathScore = prompt("수학 몇점?");
// const engScore = prompt("영어 몇점?");
// const result = (mathScore + engScore) /2;


// console.log(result)  ->>> 이상한 값이 나온다. 

// prompt로 사용자에게 입력받은 값은 무조건 문자다. 숫자형이 아니더라도 2로 나누면 자동으로 형 변환된다. 자동으로 되서 편리하다고 생각할 수 있지만, 오류를 나을 수 있다. 
//자동 형변환보다 명시적 형변환이 필요하다. 


//string()

console.log()
String(3),
String(true),
String(false),



//Number()  -->> 괄호안의 타입을 숫자형으로 바꿔준다. 

console.log(
    Number(true), //1
    Number(false) //2
)

//Number(null)// --> 0
//Number(undefined) ---> NaN     취소버튼을 받는데 0 이 된다. 




//Boolean     숫자 0 빈 문자열" null underdifined nan은. 모두 false 가 된다.   이외에는 모두 트루가 된다. 

