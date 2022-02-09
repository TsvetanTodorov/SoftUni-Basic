function maxNumber(input) {

    let inputElement = input[0];
    let index = 1;
    let maxNum = Number.MIN_SAFE_INTEGER;


    while (inputElement !== "Stop") {
        let currentNum = Number(inputElement);
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }
        inputElement = input[index];
        index++

    }
    console.log(maxNum);

}
maxNumber(["-1",
    "-2",
    "Stop"
])