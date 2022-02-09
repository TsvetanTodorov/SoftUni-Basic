function sumOfNumbers(input) {

    let num = input[0];
    let sum = 0;

    for (let i = 0; i <= num.length - 1; i++) {
        let currentIndex = Number(num[i]);
        sum += currentIndex

    }
    console.log(`The sum of the digits is:${sum}`);

}

sumOfNumbers(["564891"])