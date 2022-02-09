function equalSumsEvenOddPosition(input) {

    let index = 0;
    let number = Number(input[index]);
    let command = input[index];
    let primeNum = 0;
    let notPrimeNum = 0;
    let isPrime = true;

    while (command !== "stop") {
        isPrime = true;
        if (number > 1) {
            // looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    isPrime = false;
                }
            } // End of Inner Loop
        }

        if (number < 0) {
            console.log("Number is negative.");
            index++;
            number = Number(input[index]);
            command = input[index];
            continue;
        }
        if (!isPrime) {
            notPrimeNum += number;
        } else {
            primeNum += number;
        }
        index++;
        number = Number(input[index]);
        command = input[index];

    } // End of Outer Loop

    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeNum}`);
}
equalSumsEvenOddPosition(["0",
    "-9",
    "0",
    "stop"
])