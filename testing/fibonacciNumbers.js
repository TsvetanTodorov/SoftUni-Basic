// iska funkciq koqto priema parametur - koito parametur e chislo ot 0 do 100 cqlo chislo 
// iska da izkara chisloto na fibonachi
// primer - chisloto 2 - trqbva da se izkarat chislata 1 i 2 
// reKURsiq !!!









// function fibonacciNumbers(input) {

//     let num = Number(input.shift());
//     let result = fib(num - 1) + fib(num - 2);

//     for (let i = 1; i <= num; i++) {






//     }


// }
// fibonacciNumbers(["5"])






function printfibonacciNumbers1(input) {

    let num1 = 0;
    let num2 = 1;
    let sum = 0;

    console.log(num1);
    console.log(num2);

    for (let i = 3; i <= input; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        console.log(sum);
    }

}
printfibonacciNumbers1(10)













console.log("---------");


function printfibonacciNumbers(input) {


    let sum = 1;

    console.log(0);
    console.log(1);
    console.log(1);

    for (let i = 4; i <= input; i++) {
        sum = Math.round(sum * 1.6)
        console.log(sum);
    }

}
printfibonacciNumbers(10)