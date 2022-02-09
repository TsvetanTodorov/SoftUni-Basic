function vowelsSum(input) {

    let word = input[0];
    const LETTER_A_VALUE = 1;
    const LETTER_E_VALUE = 2;
    const LETTER_I_VALUE = 3;
    const LETTER_O_VALUE = 4;
    const LETTER_U_VALUE = 5;
    let sum = 0;

    for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i];

        switch (currentLetter) {
            case "a":
                sum = sum + LETTER_A_VALUE;
                break;
            case "e":
                sum = sum + LETTER_E_VALUE;
                break;
            case "i":
                sum = sum + LETTER_I_VALUE;
                break;
            case "o":
                sum = sum + LETTER_O_VALUE;
                break;
            case "u":
                sum = sum + LETTER_U_VALUE;
                break;

        }

    }
    console.log(sum);

}
vowelsSum(["hello"])