function SumOfTwoNumbers(input) {

    let startNum = Number(input[0]);
    let finalNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combination = 0;
    let isValid = false;


    for (let num1 = startNum; num1 <= finalNum; num1++) {
        if (isValid) {
            break;
        }
        for (let num2 = startNum; num2 <= finalNum; num2++) {
            let sum = num1 + num2;
            combination++
            if (sum === magicNum) {
                isValid = true;
                if (isValid) {
                    console.log(`Combination N:${combination} (${num1} + ${num2} = ${magicNum})`);
                    break;
                }

            }
        }

    }
    if (!isValid) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
SumOfTwoNumbers(["1",
    "10",
    "5"
])