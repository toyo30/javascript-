// //switch

// switch(){
//     case A:
//         //A일때 코드
//     case B:
//         //B일때 코드
// }


// if(평가 == A){
//     //A일때 코드
// }else if(평가 ==B){
//     //B일때 코드
// }




//사과 100원 바나나 200원 키워 300원 멜론 500원 수박 500원 사고 싶은 과일을 물어보고 가격 알려주기 


let fruit = prompt('무슨 과일을 사고 싶나요');

switch(fruit){
    case '사과':
        console.log("100원"); //브레이크를 만나기 전에 다 실행함. 
        break;
    case '바나나':
        console.log("200원");
        break;
    case '키위':
        console.log("300원");
        break;
    case '멜론':
        console.log("500원");
        break;
    case '수박':
        console.log("500원");
        break;
    default:
        console.log('그런 과일은 없습니다.')
}