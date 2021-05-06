// || or 여러 개 중 하나만 투루면 투루ㅏ. 
// && 첫뻔재 트루를 발견하는 즉시 평가를 멈춤. 뒤에 아무리 길게 작성해도. 


// and  모든 것이 투루일때 투루다. 첫 번째 flase를 발견하는 즉시 멈춘다. 시간을 줄이는 방식. 적은 사람들부터

// ! 


//이름이 tom이거나 성인이면 통과

const name= "mike";
const age = 30;

if(name ==="tom" || age > 19){
    console.log("통과");
}


if(name === "mike" && age >19){
    console.log('통과');
}else{
    console.log('탈락')
}

console.log('----------not-----')

const age1 = prompt('나이가?');
const isAdult = age1 > 19;

if(!isAdult){
    console.log("탈락")
}


//and 가 or 보다 높다. 
//만약에 