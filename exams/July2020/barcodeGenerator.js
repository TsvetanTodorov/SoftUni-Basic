function barcodeGenerator(input) {

    let num1 = Number(input[0][0]);
    let num2 = Number(input[1][0]);

    let num3 = Number(input[0][1]);
    let num4 = Number(input[1][1]);

    let num5 = Number(input[0][2]);
    let num6 = Number(input[1][2]);

    let num7 = Number(input[0][3]);
    let num8 = Number(input[1][3]);

    let text = ""

    for (i = num1; i <= num2; i++) {
        if (i % 2 != 0) {

            for (j = num3; j <= num4; j++) {
                if (j % 2 != 0) {

                    for (k = num5; k <= num6; k++) {
                        if (k % 2 != 0) {

                            for (m = num7; m <= num8; m++) {
                                if (m % 2 != 0) {

                                    text += `${i}${j}${k}${m} `
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(text)
}
barcodeGenerator(["2345",
    "6789"
])