let arr=[];
let answer=[];

for(let i = 1; i <= 10000; i++) {
    let N = 0;
    let stringNumber = String(i);
    for(let j = 0; j <stringNumber.length; j++){
        N +=Number(stringNumber[j]);
    }
    let nrr = i + N;
    arr.push(nrr);
}

for(let i=1; i<=10000; i++){
    if(arr.indexOf(i) === -1){
        answer += i + "\n"
    }
}

console.log(answer);