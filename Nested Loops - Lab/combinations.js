function combinations(input) {

    let numFromArray = Number(input[0])
    let combination = 0

    for (let num1 = 0; num1 <= numFromArray; num1++) {
        for (let num2 = 0; num2 <= numFromArray; num2++) {
            for (let num3 = 0; num3 <= numFromArray; num3++) {
                if (num1 + num2 + num3 === numFromArray) {
                    combination++

                }
            }
        }
    }
    console.log(combination);
}
combinations(["25"])