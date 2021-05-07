//반복문  

    //초기값        조건 false가 되면 멈춤.   i++의 경우 반복문 실행 후 해야할 작업 i를 증가시켜준다는 것. 
for (let i = 0 ; i < 10 ; i++){
    //번복할 코드
    console.log(i * 2)
}

console.log("-----------for-----------")

//while 반복문


//

let e = 0; //i가 0일 때, 

while (e<10){
    //코드 입력 
    console.log(e);
    e++;//이거를 추가하지 않으면 계속해서 0을 반복함. 
}

console.log("-----------while-----------")

// do while 


let u = 0;

do{
    //코드
    u++;
} while (u<10) //코드를 실행하고 조건을 반복한다. 


console.log("-----------do while-----------")
//break 반목문 빠져나오기 

//continue 멈추고 다음 반복으로 진행 


//break 



while(true){      //-> 트루면 계속 진행
     let answer = confirm('계속 할까요?');  //--> 계속 할까요? 질문을 받고 answer false일 때 멈춤
    if(!answer){
        console.log("while종료")
        break;
    }
}

console.log("-----------break-----------")
//continue

for(let d = 0; d < 10; d ++){
    if(d%2){
        continue;
    }
    console.log(d)
}


console.log("-----------continue-----------")

// 명확한 횟수가 있으면 for
// 명확한 횟수가 없으면 while