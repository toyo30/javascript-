//1 

console.log('A')

console.log('B')

console.log('C')

function bigNumber(){
    for(let i = 0; i < 1000; i++) {
        console.log(i);
        
 }};

 console.log(bigNumber())


//2
console.log('_--------2--------')

console.log('A')

setTimeout(function cd(){
    console.log('B');
}, 0);

console.log('C')




//3 


function first(){
    second();
    console.log("첫번째");
}
function second(){
    third();
    console.log("두번째");
}
function third(){
    console.log("세번째");
}
first();


//4

function multiply(x, y) {
    return x * y;
}
function printSquare(x) {
    var s = multiply(x, x);
    console.log(s);
}
printSquare(5);




//5

// function foo() {
//     throw new Error('SessionStack will help you resolve crashes :)');
// }
// function bar() {
//     foo();
// }
// function start() {
//     bar();
// }
// start();
