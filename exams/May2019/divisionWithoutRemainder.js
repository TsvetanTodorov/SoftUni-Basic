function divisionWithoutRemainder(input) {


    let totalNumbers = Number(input.shift());
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;

    for (let i = 0; i <= totalNumbers - 1; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber % 2 === 0) {
            p2Counter++;
        }
        if (currentNumber % 3 === 0) {
            p3Counter++;
        }
        if (currentNumber % 4 === 0) {
            p4Counter++;
        }
    }

    let p2CounterInPercentages = p2Counter / totalNumbers * 100;
    let p3CounterInPercentages = p3Counter / totalNumbers * 100;
    let p4CounterInPercentages = p4Counter / totalNumbers * 100;

    console.log(`${p2CounterInPercentages.toFixed(2)}%`);
    console.log(`${p3CounterInPercentages.toFixed(2)}%`);
    console.log(`${p4CounterInPercentages.toFixed(2)}%`);


}
divisionWithoutRemainder(["3",
    "3",
    "6",
    "9"
])