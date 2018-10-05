/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let a = 1;
    let b = 0;
    let temp;

    for(let i = 0; i <= num; i++){
        temp = a;
        a = a + b;
        b = temp;
    }
        return b;
}

console.log(fibonacci(10));
console.log(fibonacci(6));